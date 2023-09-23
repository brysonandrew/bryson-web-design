import styled from '@emotion/styled';
import { Button } from '../../components/Buttons';
import { useReader } from '../../context';
import { usePlay } from '@pages/reader/hooks/usePlay';
import { Stop } from './Stop';

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

  const handlePlay = usePlay();

  return (
    <Root className='relative row'>
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
        <Button disabled={!phrase} onClick={handlePlay}>
          <i className='i-mdi-play' />
        </Button>
      )}
      <Stop />
    </Root>
  );
};
