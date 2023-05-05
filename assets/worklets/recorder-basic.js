class Processor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    const inputChannel = inputs[0][0];
    this.port.postMessage(inputChannel);
    outputs = inputChannel
    return true;
  }
}

registerProcessor("recorder-basic", Processor);
