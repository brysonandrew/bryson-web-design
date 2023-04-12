import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "./types";

export const useDrone = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    volume,
  }: THandlerConfig) => {
    const delay = new DelayNode(context, {
      delayTime: 0.99,
    });
    const lfo = new OscillatorNode(context, {
      frequency: 0.5,
    });
    const lfoGain = new GainNode(context, { gain: 500 });
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const gain = new GainNode(context, {
      gain: volume ?? 0.01,
    });
    const options: TMultiOptions = {
      type: "sawtooth",
      midi: (pitch ?? 0) + 28,
      count: 20,
      spread: 0.4,
      stagger: 0.1,
      start: startTime,
      output: delay,
    };

    delay.delayTime.exponentialRampToValueAtTime(0.001, 1);

    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
