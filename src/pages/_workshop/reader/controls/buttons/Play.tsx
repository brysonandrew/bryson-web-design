import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/_workshop/reader/hooks/usePlay';
import { useReader } from '@pages/_workshop/reader/context';
import { I } from '@brysonandrew/icons/icon';
import { PLAY_ICON } from '@brysonandrew/icons';

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
            ? 'border-accent border-1'
            : '',
      }}
    >
      <I classValue='w-8 h-8' icon={PLAY_ICON} />
    </Button>
  );
};
