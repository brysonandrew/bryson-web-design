import { useEffect, useRef } from 'react';
import { useReader } from '../context';
import { useEventListener } from '@hooks/events/useEventListener';
const PREFERRED_VOICE_URI = 'Daniel'; //'Rocko (English (UK))';

export const useSynthesis = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    voicesState: [voices, setVoices],
  } = useReader();
  const speechSynthesisRef = useRef(speechSynthesis);
  speechSynthesisRef.current = speechSynthesis;

  const handleVoicesChanged = (event: Event) => {
    const synthesis =
      event.currentTarget as SpeechSynthesis;
    console.log(synthesis, event);
    if (synthesis && !voices) {
      setSynthesis(synthesis);
      const voices = synthesis.getVoices();
      setVoices(voices);
      const nextVoice =
        voices.find(
          (voice: SpeechSynthesisVoice) =>
            voice.voiceURI === PREFERRED_VOICE_URI, // voice.default,
        )?.voiceURI ?? '';
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
