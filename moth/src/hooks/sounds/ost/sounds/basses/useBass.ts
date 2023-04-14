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
    const filterFrequency = {
      start: 600,
      end: 10,
    };

    const filter = new BiquadFilterNode(context, {
      frequency: filterFrequency.start,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: volume });

    const end = startTime + duration;
    const options: TMultiOptions = {
      type: "sawtooth",
      midi: 12 + pitch,
      count: 1,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end,
      output: filter,
    };

    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.linearRampToValueAtTime(volume / 12, end);

    filter.frequency.setValueAtTime(
      filterFrequency.start,
      end,
    );
    filter.frequency.linearRampToValueAtTime(
      filterFrequency.end,
      end,
    );

    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
