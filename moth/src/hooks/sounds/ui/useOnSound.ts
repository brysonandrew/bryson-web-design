import type {
  TMultiOptions} from "react-synthwave";
import {
  useSynthMulti,
} from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useOnSound = () => {
  const { context, isSound, master } = useMothContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 2000,
      type: "bandpass",
    });
    const gain = new GainNode(context, { gain: 0.05 });

    const opts: TMultiOptions = {
      type: "triangle",
      midi: 90,
      detune: 0,
      attack: 0,
      delay: 0,
      count: 11,
      spread: 2,
      decay: 0.1,
      stagger: 0.05,
      start: context.currentTime,
      end: context.currentTime,
      output: filter,
    };

    filter.connect(gain);
    gain.connect(master);

    await play(opts);
  };

  return handler;
};
