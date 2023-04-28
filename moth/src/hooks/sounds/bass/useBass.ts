import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";

export const useBass = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (startTime: number) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 600,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: 0.4 });
    const opts: TMultiOptions = {
      type: "sawtooth",
      midi: 16,
      count: 1,
      spread: 1,
      stagger: 0,
      decay: 0,
      start: startTime,
      end: startTime + 0.4,
      output: filter,
    };
    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + 0.6,
    );
    gain.gain.linearRampToValueAtTime(0, startTime + 0.6);
    filter.connect(gain);
    gain.connect(master);
    play(opts);
  };
  const handleStop = () => {
    stop();
  };

  return { play: handler, stop: handleStop };
};
