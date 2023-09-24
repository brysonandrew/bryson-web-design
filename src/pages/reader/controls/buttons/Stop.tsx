import { Button2 as Button } from '../../components/Buttons';
import { useReader } from '@pages/reader/context';

export const Stop = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    phraseState: [phrase, setPhrase],
  } = useReader();

  return (
    <Button
      className='absolute top-full left-0 -translate-x-1/2 translate-y-0 w-4 h-4'
      disabled={!phrase}
      onClick={() => {
        if (speechSynthesis && phrase) {
          speechSynthesis.cancel();
        }
      }}
    >
      <i className='i-mdi-stop' />
    </Button>
  );
};
