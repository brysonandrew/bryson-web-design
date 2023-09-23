import styled from '@emotion/styled';
import { Button } from '../components/Buttons';
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
          <i className='i-mdi-pause' />
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
          <i className='i-mdi-play' />
        </Button>
      )}
      {typeof playMode === 'boolean' && (
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
      )}
    </Root>
  );
};
