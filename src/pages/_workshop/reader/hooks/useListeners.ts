import { useEffect } from 'react';
import { TContext } from '../context/types';
import { resolveListeners } from '../utils/resolveListeners';

type TConfig = Pick<
  TContext,
  | 'playModeState'
  | 'volumeState'
  | 'utteranceState'
  | 'rateState'
  | 'pitchState'
>;
export const useListeners = ({
  playModeState: [playMode, setPlaying],
  utteranceState: [utterance, setUtterance],
  volumeState: [volume, setVolume],
  rateState: [rate, setRate],
  pitchState: [pitch, setPitch],
}: TConfig) => {
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
