import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useFireSound = () => {
  const { context, master, isSound } = useMothContext();
  const synthMulti = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const delay = new DelayNode(context, {
      delayTime: 1,
    });
    const filter = new BiquadFilterNode(context, {
      frequency: 200,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: 0.8 });
    const opts: TMultiOptions = {
      type: "sawtooth",
      midi: 0,
      count: 1,
      spread: 0.1,
      stagger: 0.1,
      decay: 2,
      start: context.currentTime,
      end: context.currentTime + 2,
      output: delay,
    };
    delay.delayTime.exponentialRampToValueAtTime(
      0.001,
      context.currentTime + 0.4,
    );
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 1,
    );
    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    synthMulti.play(opts);
  };

  return {
    ...synthMulti,
    play: handler.bind(synthMulti.play),
  };
};
