import { I } from 'lib/icons/icon';
import { Button } from '../../components/Buttons';
import { useReader } from '../../context';

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
