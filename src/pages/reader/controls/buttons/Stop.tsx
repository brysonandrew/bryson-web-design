import { Button1 as Button } from '../../components/Buttons';
import { useReader } from '@pages/reader/context';

export const Stop = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    phraseState: [phrase, setPhrase],
    playModeState: [playMode, setPlaying],
  } = useReader();

  return (
    <>
      {typeof playMode === 'boolean' && (
        <Button
          className='absolute top-full left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4'
          disabled={!phrase}
          onClick={() => {
            if (speechSynthesis && phrase) {
              speechSynthesis.cancel();
            }
          }}
        >
          <i className='i-mdi-stop' />
        </Button>
      )}
    </>
  );
};
