class KarplusStrong extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.99,
        minValue: -1.2,
        maxValue: 1.2,
      },
      {
        name: "delayTime",
        defaultValue: 12,
        minValue: 0,
        maxValue: 1000,
      },
      {
        name: "stretch",
        defaultValue: 1000,
        minValue: 1,
        maxValue: 1000,
      },
    ];
  }

  constructor() {
    super();
    this.bufferSize = sampleRate;
    this.buffer = new Array(this.bufferSize).fill(0);
    this.read = 0;
    this.write = 0;
  }

  process(inputs, outputs, parameters) {
    const delayTimes = parameters["delayTime"];
    const gains = parameters["gain"];
    const stretchs = parameters["stretch"];

    const input = inputs[0];
    const output = outputs[0];

    for (let i = 0; i < output.length; i++) {
      jloop: for (let j = 0; j < output[i].length; j++) {
        if (
          typeof input[i] === "undefined" ||
          typeof input[i][j] === "undefined"
        )
          continue jloop;

        const gain =
          gains.length === 1 ? gains[0] : gains[j];
        const delayTime =
          delayTimes.length === 1
            ? delayTimes[0]
            : delayTimes[j];
        const stretch =
          stretchs.length === 1 ? stretchs[0] : stretchs[j];

        const delaySamples = ~~(
          sampleRate *
          (delayTime / stretch)
        );
        output[i][j] =
          gain * this.buffer[this.read] + input[i][j];

        this.buffer[this.write] = output[i][j];
        this.write++;
        if (this.write >= this.bufferSize)
          this.write = this.write - this.bufferSize;
        this.read = this.write - delaySamples;
        if (this.read < 0)
          this.read = this.read + this.bufferSize;
      }
    }
    return true;
  }
}

registerProcessor("karplus-strong", KarplusStrong);
