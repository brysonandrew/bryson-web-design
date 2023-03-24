import {
  TMultiOptions,
  useSynthMulti,
} from "react-synthwave";
import { useContext } from "@state/Context";

export const useOnSound = () => {
  const { context, isSound } = useContext();
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
    gain.connect(context.destination);

    await play(opts);
  };

  return handler;
};
