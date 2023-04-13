import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
export type THandlerConfig = {
  startTime: number;
  pitch?: number;
  duration?: number;
  volume?: number;
  type?: OscillatorType;
};

export const useBass = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    startTime,
    duration = 0,
    volume = 0.2,
    pitch = 0,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 600,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: volume });
    const options: TMultiOptions = {
      type: "sawtooth",
      midi: 16 + pitch,
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
      startTime + duration,
    );

    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
