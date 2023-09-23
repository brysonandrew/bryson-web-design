import { useEffect } from 'react';
import { useReader } from '../context';

export const useSynthesis = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    voicesState: [voices, setVoices],
  } = useReader();
  
  useEffect(() => {
    const synthesis = window.speechSynthesis;

    const handleVoicesChanged: (
      this: SpeechSynthesis,
      ev: Event,
    ) => any = (e) => {
      if (synthesis && !voices) {
        setSynthesis(synthesis);
        const voices = synthesis.getVoices();
        setVoices(voices);
        setSelectedVoice(
          voices.find(
            (voice: SpeechSynthesisVoice) => voice.default,
          )?.voiceURI ?? '',
        );
      }
    };

    synthesis.addEventListener(
      'voiceschanged',
      handleVoicesChanged,
    );
    return () => {
      synthesis.removeEventListener(
        'voiceschanged',
        handleVoicesChanged,
      );
    };
  }, [speechSynthesis]);
};
