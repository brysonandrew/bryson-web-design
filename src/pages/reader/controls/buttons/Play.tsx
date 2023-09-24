import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/reader/hooks/usePlay';
import { useReader } from '@pages/reader/context';

export const Play = () => {
  const {
    phraseState: [phrase, setPhrase],
  } = useReader();

  const handlePlay = usePlay();

  return (
    <Button disabled={!phrase} onClick={handlePlay}>
      <i className='i-mdi-play' />
    </Button>
  );
};
