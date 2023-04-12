import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";

export const useBass = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    duration,
    type = "sawtooth",
    volume = 0.1,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });

    const gain = new GainNode(context, { gain: volume });
    const end = startTime + (duration ?? 0);
    const options: TMultiOptions = {
      type,
      midi: 24 + (pitch ?? 0),
      count: 20,
      spread: 4,
      stagger: 0.2,
      decay: 0.2,
      start: startTime,
      end,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + (duration ?? 0),
    );
    gain.gain.linearRampToValueAtTime(volume, end);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
