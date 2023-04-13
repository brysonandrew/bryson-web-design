import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { THandlerConfig } from "../../rezauutinumn/types";
import { useMothContext } from "@moth-state/Context";

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
      torque = 5000,
      revs = 1200,
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
      frequency: 1000,
      type: "allpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.detune);

    const gain = new GainNode(context, { gain: volume });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 28 + pitch,
      count: 20,
      spread: 0.4,
      stagger: 0.1,
      start: startTime,
      end,
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
