import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from '@hooks/sounds/context';

export const useMoveSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 4000,
      type: 'bandpass',
    });
    const gain = new GainNode(context, { gain: 0.01 });
    const opts: TMultiOptions = {
      type: 'sine',
      midi: 60,
      count: 40,
      attack: 0.1,
      spread: 10,
      stagger: 0.1,
      decay: 0.4,
      start: context.currentTime,
      end: context.currentTime + 0.2,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(context.destination);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.6,
    );
    await play(opts);
  };

  return handler;
};
