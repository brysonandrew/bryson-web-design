import { I } from '@brysonandrew/icons-i';
import { useReader } from '@pages/_workshop/reader/context/ReaderProvider';
import { Button } from '../../components/Buttons';

export const Pause = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    phraseState: [phrase, setPhrase],
  } = useReader();

  return (
    <Button
      disabled={!phrase}
      onClick={() => {
        if (speechSynthesis && phrase) {
          speechSynthesis.pause();
        }
      }}
    >
      <I icon='mdi-pause' />
    </Button>
  );
};
