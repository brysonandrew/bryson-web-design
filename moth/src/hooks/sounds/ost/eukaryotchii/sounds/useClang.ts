import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import { THandlerConfig } from "../types";

export const useClang = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    type = "sawtooth",
    startTime,
    duration = 1,
    pitch = 0,
  }: THandlerConfig) => {
    const delay = new DelayNode(context, {
      delayTime: 1,
    });
    const lfo = new OscillatorNode(context, {
      frequency: 0.5,
    });
    const lfoGain = new GainNode(context, { gain: 500 });
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const gain = new GainNode(context, { gain: 0.01 });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 28 + pitch,
      count: 20,
      spread: 0.4,
      stagger: 0.1,
      start: startTime,
      end,
      output: delay,
    };

    delay.delayTime.exponentialRampToValueAtTime(
      0.001,
      end,
    );

    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
