import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";

export type TMechHandlerConfig = THandlerConfig & {
  torque?: number;
  revs?: number;
};

export const useMech = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (config: TMechHandlerConfig) => {
    const {
      type = "sawtooth",
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01,
      torque = 1200,
      revs = 2400,
    } = config;
    const lfo = new OscillatorNode(context, {
      frequency: revs,
    });
    const lfoGain = new GainNode(context, { gain: torque });
    const lowpass = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
      detune: 0,
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.detune);

    const gain = new GainNode(context, { gain: volume });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 24 + pitch,
      count: 1,
      spread: 0,
      stagger: 0,
      start: startTime,
      end: end + 0.1,
      delay: 0.1,
      output: filter,
    };

    lfo.start(startTime);
    lfo.stop(end);

    filter.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
