import type { TMultiOptions } from 'react-synthwave';
import { useSynthMulti } from 'react-synthwave';
import { useSound as useContext } from './SoundProvider';

export const usePopSound = () => {
  const { context, isSound } = useContext();
  const { play } = useSynthMulti(context);

  const handler = async () => {
    if (!isSound) return;
    await context.resume();
    const filter = new BiquadFilterNode(context, {
      frequency: 1500,
      type: 'bandpass',
    });
    const gain = new GainNode(context, { gain: 0.006 });
    const opts: TMultiOptions = {
      type: 'triangle',
      midi: 70,
      count: 5,
      spread: 2,
      stagger: 0.02,
      decay: 0.1,
      attack: 0,
      start: context.currentTime,
      end: context.currentTime + 0.08,
      output: filter,
    };
    filter.connect(gain);
    gain.connect(context.destination);
    gain.gain.linearRampToValueAtTime(
      0,
      context.currentTime + 0.2,
    );
    await play(opts);
  };

  return handler;
};

