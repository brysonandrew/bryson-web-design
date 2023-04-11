import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useCoinDropSound = () => {
  const { context, master, isSound } = useMothContext();
  const synthMulti = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "bandpass",
    });
    const gain = new GainNode(context, { gain: 1 });
    const opts: TMultiOptions = {
      type: "triangle",
      midi: 120,
      count: 1,
      spread: 10,
      stagger: 0.02,
      decay: 0.4,
      start: context.currentTime,
      end: context.currentTime + 0.2,
      output: filter,
    };

    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.6,
    );

    filter.connect(gain);
    gain.connect(master);

    synthMulti.play(opts);
  };

  return {
    ...synthMulti,
    play: handler.bind(synthMulti.play),
  };
};
