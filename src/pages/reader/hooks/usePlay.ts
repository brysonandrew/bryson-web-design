import { useReader } from '../context';

export const usePlay = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    phraseState: [phrase, setPhrase],
    utteranceState: [utterance, setUtterance],
    voicesState: [voices, setVoices],
  } = useReader();

  const handler = () => {
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
