import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from './SoundProvider';

export const useWhooshSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: 'lowpass',
    });
    const gain = new GainNode(context, { gain: 0.005 });
    const opts: TMultiOptions = {
      type: 'sawtooth',
      midi: 40,
      count: 15,
      spread: 8,
      stagger: 0.03,
      decay: 0.5,
      attack: 0.1,
      start: context.currentTime,
      end: context.currentTime + 0.3,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(context.destination);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.8,
    );
    await play(opts);
  };

  return handler;
};

