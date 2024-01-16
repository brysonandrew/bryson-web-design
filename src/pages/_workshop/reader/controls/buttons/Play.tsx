import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/_workshop/reader/hooks/usePlay';
import { useReader } from '@pages/_workshop/reader/context';
import { I } from '@lib/icons/icon';
import { STYLE } from '@app/style';

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
            ? STYLE.GLOW.accent
            : '',
      }}
    >
      <I classValue='w-8 h-8' icon='mdi-play' />
    </Button>
  );
};
