import { useEffect } from 'react';
import { resolveListeners } from '../utils/resolveListeners';
import { useReader } from '../context';

export const useListeners = () => {
  const {
    playModeState: [playMode, setPlaying],
    utteranceState: [utterance, setUtterance],
    volumeState: [volume, setVolume],
    rateState: [rate, setRate],
    pitchState: [pitch, setPitch],
  } = useReader();

  useEffect(() => {
    if (utterance) {
      utterance.volume = volume;
      utterance.rate = rate;
      utterance.pitch = pitch;

      resolveListeners(
        utterance,
        [
          ['onstart', true], 
          ['onpause', false],
          ['onresume', true],
          ['onerror', null],
          ['onend', null],
        ],
        setPlaying,
      );
    }
    return () => {
      if (utterance) {
        resolveListeners(utterance, [
          ['onstart'],
          ['onpause'],
          ['onresume'],
          ['onerror'],
          ['onend'],
        ]);
      }
    };
  }, [utterance, volume, pitch, rate]);
};
