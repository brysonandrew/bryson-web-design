import { Button2 as Button } from '../../components/Buttons';
import { I } from '@brysonandrew/icons-i';
import { useReader } from '@pages/_workshop/reader/context/ReaderProvider';

export const Stop = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    phraseState: [phrase, setPhrase],
  } = useReader();

  return (
    <Button
      className='absolute top-full right-0 translate-x-1/2 translate-y-0 w-4 h-4'
      disabled={!phrase}
      onClick={() => {
        if (speechSynthesis && phrase) {
          speechSynthesis.cancel();
        }
      }}
    >
      <I icon='mdi-stop' />
    </Button>
  );
};
