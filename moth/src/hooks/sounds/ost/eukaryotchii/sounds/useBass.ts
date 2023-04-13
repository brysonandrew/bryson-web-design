import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import { THandlerConfig } from "../types";

export const useBass = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    startTime,
    duration = 0.4,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: 0.05 });
    const options: TMultiOptions = {
      type: "square",
      midi: 16,
      count: 1,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + duration,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + 0.6,
    );
    gain.gain.linearRampToValueAtTime(0, startTime + 0.6);

    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
