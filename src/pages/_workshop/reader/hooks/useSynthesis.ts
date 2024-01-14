import { useEffect, useRef } from 'react';
import { useEventListener } from '@lib/hooks/events/useEventListener';
import { TContext } from '../context/types';
const PREFERRED_VOICE_URI =
  'Daniel (English (United Kingdom))'; //'Rocko (English (UK))';

type TConfig = Pick<
  TContext,
  | 'speechSynthesisState'
  | 'selectedVoiceState'
  | 'voicesState'
>;
export const useSynthesis = ({
  speechSynthesisState: [speechSynthesis, setSynthesis],
  selectedVoiceState: [selectedVoice, setSelectedVoice],
  voicesState: [voices, setVoices],
}: TConfig) => {
  const speechSynthesisRef = useRef(speechSynthesis);
  speechSynthesisRef.current = speechSynthesis;

  const handleVoicesChanged = (event: Event) => {
    const synthesis =
      event.currentTarget as SpeechSynthesis;
    if (synthesis && !voices) {
      setSynthesis(synthesis);
      const voices = synthesis.getVoices();
      setVoices(voices);
      const nextVoice =
        voices.find(
          (voice: SpeechSynthesisVoice) =>
            voice.voiceURI === PREFERRED_VOICE_URI, // voice.default,
        )?.voiceURI ?? voices[0].voiceURI;
      setSelectedVoice(nextVoice);
    }
  };

  useEffect(() => {
    speechSynthesisRef.current = window.speechSynthesis;
  }, []);

  useEventListener(
    'voiceschanged',
    handleVoicesChanged,
    speechSynthesisRef,
  );
};
