import { useSound as useContext } from 'lib/hooks/sounds/context';
import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";

export const useCoinDropSound = () => {
  const { context, isSound } = useContext();
  const synthMulti = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 200,
      type: "bandpass",
    });
    const gain = new GainNode(context, { gain: 0.004 });
    const opts: TMultiOptions = {
      type: "sawtooth",
      midi: 10,
      count: 10,
      spread: 1,
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
    gain.connect(context.destination);

    synthMulti.play(opts);
  };

  return {
    ...synthMulti,
    play: handler.bind(synthMulti.play),
  };
};
