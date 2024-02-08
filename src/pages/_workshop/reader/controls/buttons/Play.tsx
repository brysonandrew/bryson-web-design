import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/_workshop/reader/hooks/usePlay';
import { I } from '@brysonandrew/icons-i';
import { PLAY_ICON } from '@brysonandrew/icons';
import { useReader } from '@pages/_workshop/reader/context/ReaderProvider';

export const Play = () => {
  const {
    clipboardState,
    phraseState: [phrase],
  } = useReader();
  const handlePlay = usePlay();

  return (
    <Button
      disabled={!phrase}
      onClick={handlePlay}
      style={{
        boxShadow:
          clipboardState.copying === 'pending'
            ? 'border-accent border-1'
            : '',
      }}
    >
      <I classValue='w-8 h-8' icon={PLAY_ICON} />
    </Button>
  );
};
