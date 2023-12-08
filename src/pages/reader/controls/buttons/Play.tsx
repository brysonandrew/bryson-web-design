import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/reader/hooks/usePlay';
import { useReader } from '@pages/reader/context';
import { GLOW_BABY_BLUE_4 } from '@uno/shadows';

export const Play = () => {
  const {
    clipboardContext,
    phraseState: [phrase],
  } = useReader();
  const handlePlay = usePlay();

  return (
    <Button
      disabled={!phrase}
      onClick={handlePlay}
      style={{
        boxShadow:
          clipboardContext.copying === 'pending'
            ? GLOW_BABY_BLUE_4
            : '',
      }}
    >
      <i className='i-mdi-play' />
    </Button>
  );
};
