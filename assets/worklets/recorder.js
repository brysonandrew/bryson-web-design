/*
A worklet for recording in sync with AudioContext.currentTime.

How to use. Whenever you need to record anything, create a WorkletNode, route the 
audio into it, and schedule the values for 'isRecording' parameter:

    const recorderNode = new window.AudioWorkletNode(
      audioContext,
      'recorder-worklet'
    );

    yourSourceNode.connect(recorderNode);
    recorderNode.connect(audioContext.destination);

    recorderNode.port.onmessage = (e) => {
      if (e.data.eventType === 'data') {
        const audioData = e.data.audioBuffer;
        // process pcm data
      }

      if (e.data.eventType === 'stop') {
        // recording has stopped
      }
    };

    recorderNode.parameters.get('isRecording').setValueAtTime(1, time);
    recorderNode.parameters.get('isRecording').setValueAtTime(
      0,
      time + duration
    );
    yourSourceNode.start(time);
      
*/

class Recorder extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [{
      name: 'isRecording',
      defaultValue: 0
    }];
  }

  constructor() {
    super();
    this.bufferSize = 2048;
    this.buffer = new Float32Array(this.bufferSize);
    this.initBuffer();
  }

  initBuffer() {
    this.bytesWritten = 0;
  }

  isBufferEmpty() {
    return this.bytesWritten === 0;
  }

  isBufferFull() {
    return this.bytesWritten === this.bufferSize;
  }

  appendToBuffer(value) {
    if (this.isBufferFull()) {
      this.flush();
    }

    this.buffer[this.bytesWritten] = value;
    this.bytesWritten += 1;
  }

  flush() {
    let buffer = this.buffer;
    if (this.bytesWritten < this.bufferSize) {
      buffer = buffer.slice(0, this.bytesWritten);
    }

    this.port.postMessage({
      eventType: 'data',
      audioBuffer: buffer
    });

    this.initBuffer();
  }

  recordingStopped() {
    this.port.postMessage({
      eventType: 'stop'
    });
  }

  process(inputs, outputs, parameters) {
    const isRecordingValues = parameters.isRecording;

    for (
      let dataIndex = 0;
      dataIndex < isRecordingValues.length;
      dataIndex++
    ) {
      const shouldRecord = isRecordingValues[dataIndex] === 1;
      if (!shouldRecord && !this.isBufferEmpty()) {
        this.flush();
        this.recordingStopped();
      }

      if (shouldRecord) {
        this.appendToBuffer(inputs[0][0][dataIndex]);
      }
    }

    return true;
  }

}

registerProcessor('recorder', Recorder);