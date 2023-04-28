import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/rezauutinumn/types";

export const useSynth2 = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    volume = 0.01,
    type = "sawtooth",
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1000,
      type: "lowpass",
    });
    const gain = new GainNode(context, {
      gain: volume,
    });
    const options: TMultiOptions = {
      type,
      midi: 0 + pitch,
      count: 10,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + duration,
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
