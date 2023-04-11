import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useMoveSound = () => {
  const { context, master, isSound } = useMothContext();
  const synthMulti = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 3000,
      type: "bandpass",
    });
    const gain = new GainNode(context, { gain: 2 });
    const opts: TMultiOptions = {
      type: "triangle",
      midi: 20,
      count: 28,
      attack: 0.1,
      spread: 28,
      stagger: 0.1,
      decay: 1.2,
      start: context.currentTime,
      end: context.currentTime + 1,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(master);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 1,
    );
    synthMulti.play(opts);
  };

  return { ...synthMulti, play: handler.bind(synthMulti) };
};
