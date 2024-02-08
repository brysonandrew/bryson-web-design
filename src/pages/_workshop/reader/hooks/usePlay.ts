import { useReader } from '@pages/_workshop/reader/context/ReaderProvider';
import { useRef } from 'react';

export const usePlay = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    phraseState: [phrase, setPhrase],
    utteranceState: [utterance, setUtterance],
    voicesState: [voices, setVoices],
  } = useReader();

  const current = { phrase, speechSynthesis, selectedVoice, voices };
  const currentRef = useRef(current);
  currentRef.current = current;

  const handler = () => {
    const { phrase , speechSynthesis, selectedVoice, voices } = currentRef.current;
    if (speechSynthesis && phrase) {
      if (speechSynthesis?.speaking) {
        speechSynthesis.resume();
      } else {
        const utterance = new SpeechSynthesisUtterance(
          phrase,
        );
        if (selectedVoice) {
          const nextVoice = voices?.find(
            (voice: SpeechSynthesisVoice) =>
              voice.voiceURI === selectedVoice,
          );
          if (nextVoice) {
            utterance.voice = nextVoice;
          }
        }
        setUtterance(utterance);
        speechSynthesis.speak(utterance);
      }
    }
  };
  return handler;
};
