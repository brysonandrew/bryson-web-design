class Processor extends AudioWorkletProcessor {
  process(inputs) {
    const inputChannel = inputs[0][0];
    this.port.postMessage(inputChannel);
    return true;
  }
}

registerProcessor("recorder-basic", Processor);
