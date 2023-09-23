import styled from '@emotion/styled';
import { Button } from '../components/Button';
import { useReader } from '../context';

const Root = styled.div``;

export const Buttons = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    phraseState: [phrase, setPhrase],
    playModeState: [playMode, setPlaying],
    utteranceState: [utterance, setUtterance],
    voicesState: [voices, setVoices],
  } = useReader();

  return (
    <Root className='row'>
      {playMode ? (
        <Button
          disabled={!phrase}
          onClick={() => {
            if (speechSynthesis && phrase) {
              speechSynthesis.pause();
            }
          }}
        >
          ❚❚
        </Button>
      ) : (
        <Button
          disabled={!phrase}
          onClick={() => {
            if (speechSynthesis && phrase) {
              if (speechSynthesis?.speaking) {
                speechSynthesis.resume();
              } else {
                const utterance =
                  new SpeechSynthesisUtterance(phrase);
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
          }}
        >
          ▶
        </Button>
      )}
      {typeof playMode === 'boolean' ? (
        <Button
          disabled={!phrase}
          onClick={() => {
            if (speechSynthesis && phrase) {
              speechSynthesis.cancel();
            }
          }}
        >
          ■
        </Button>
      ) : (
        <Button
          onClick={() => {
            if (speechSynthesis) {
              if (phrase) {
                setPhrase('');
              } else {
                setPhrase('PLACEHOLDER_TEXT');
              }
            }
          }}
        >
          {phrase ? '－' : '＋'}
        </Button>
      )}
    </Root>
  );
};
