import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useCloakSound = () => {
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
      type: "sine",
      midi: 60,
      count: 4,
      spread: 100,
      stagger: 0.4,
      attack: 0.4,
      decay: 4,
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
