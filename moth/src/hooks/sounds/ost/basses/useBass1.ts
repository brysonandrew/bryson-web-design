import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";
import { useGain } from "../useGain";

export const useBass1 = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);
  const gain = useGain();

  const handler = ({
    startTime,
    pitch,
    duration,
    volume,
    type = "sawtooth",
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    gain.gain.value = volume ?? 0.01;
    const options: TMultiOptions = {
      type,
      midi: 0 + (pitch ?? 0),
      count: 10,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + (duration ?? 0) + 0.4,
      output: filter,
    };

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop,
    gain,
  };
};
