import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useMeleeSound = () => {
  const { context, master, isSound } = useMothContext();
  const synthMulti = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 8000,
      type: "bandpass",
      Q: 2
    });
    const gain = new GainNode(context, { gain: 0.1 });

    const opts: TMultiOptions = {
      type: "sawtooth",
      midi: 40,
      detune: 0.4,
      attack: 0,
      delay: 3,
      count: 80,
      spread: 1,
      decay: 2,
      stagger: 0.3,
      start: context.currentTime,
      end: context.currentTime,
      output: filter,
    };

    filter.connect(gain);
    gain.connect(master);
    synthMulti.play(opts);
  };

  const stop = () => {
    synthMulti.stop({
      end: 0,
      onEnded: (x) => console.log("DONE", x),
    });
  };

  return {
    ...synthMulti,
    play: handler.bind(synthMulti),
    stop: stop.bind(synthMulti),
  };
};
