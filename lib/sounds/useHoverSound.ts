import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from './SoundProvider';

export const useHoverSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 5000,
      type: 'highpass',
    });
    const gain = new GainNode(context, { gain: 0.003 });
    const opts: TMultiOptions = {
      type: 'sine',
      midi: 95,
      count: 2,
      spread: 3,
      stagger: 0.05,
      decay: 0.2,
      attack: 0.05,
      start: context.currentTime,
      end: context.currentTime + 0.15,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(context.destination);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.4,
    );
    await play(opts);
  };

  return handler;
};

