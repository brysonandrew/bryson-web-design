import type {
  TMultiOptions} from "react-synthwave";
import {
  useSynthMulti,
} from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useOffSound = () => {
  const { context, isSound, master } = useMothContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 4000,
      type: "bandpass",
    });
    const gain = new GainNode(context, { gain: 0.4 });
    const opts: TMultiOptions = {
      type: "triangle",
      midi: 40,
      count: 4,
      spread: 10,
      stagger: 0.02,
      decay: 0.4,
      start: context.currentTime,
      end: context.currentTime + 0.2,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(master);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.6,
    );
    await play(opts);
  };

  return handler;
};
