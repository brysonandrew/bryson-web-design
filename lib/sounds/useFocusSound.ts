import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from './SoundProvider';

export const useFocusSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 4000,
      type: 'highpass',
    });
    const gain = new GainNode(context, { gain: 0.01 });
    const opts: TMultiOptions = {
      type: 'sine',
      midi: 90,
      count: 4,
      spread: 2,
      stagger: 0.2,
      decay: 0.1,
      start: context.currentTime,
      end: context.currentTime + 0.1,
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
