import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "./types";

export const useBass = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    duration,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: 0.02 });
    const options: TMultiOptions = {
      type: "sawtooth",
      midi: 40 + (pitch ?? 0),
      count: 4,
      spread: 20,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + (duration ?? 0),
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + (duration ?? 0),
    );
    //gain.gain.linearRampToValueAtTime(0, startTime + duration);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
