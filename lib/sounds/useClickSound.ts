import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from './SoundProvider';

export const useClickSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 3000,
      type: 'bandpass',
    });
    const gain = new GainNode(context, { gain: 0.008 });
    const opts: TMultiOptions = {
      type: 'square',
      midi: 80,
      count: 3,
      spread: 1,
      stagger: 0.01,
      decay: 0.05,
      attack: 0,
      start: context.currentTime,
      end: context.currentTime + 0.05,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(context.destination);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.15,
    );
    await play(opts);
  };

  return handler;
};

