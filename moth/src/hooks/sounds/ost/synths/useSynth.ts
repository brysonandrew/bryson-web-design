import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/nautilus/types";

export const useSynth = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    duration,
    volume,
    type = "sawtooth",
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1000,
      type: "lowpass",
    });
    const gain = new GainNode(context, {
      gain: volume ?? 0.04,
    });
    const options: TMultiOptions = {
      type,
      midi: 0 + (pitch ?? 0),
      count: 12,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + (duration ?? 0),
      output: filter,
    };

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
