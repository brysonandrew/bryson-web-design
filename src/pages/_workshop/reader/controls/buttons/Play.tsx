import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/_workshop/reader/hooks/usePlay';
import { useReader } from '@pages/_workshop/reader/context';
import { I } from '@brysonandrew/base/icons/icon';
import { useApp } from '@brysonandrew/app';
import { TStyle } from '@app/style';

export const Play = () => {
  const {
    clipboardContext,
    phraseState: [phrase],
  } = useReader();
  const { GLOW_BOX } = useApp<TStyle>();
  const handlePlay = usePlay();

  return (
    <Button
      disabled={!phrase}
      onClick={handlePlay}
      style={{
        boxShadow:
          clipboardContext.copying === 'pending'
            ? GLOW_BOX.accent
            : '',
      }}
    >
      <I classValue='w-8 h-8' icon='mdi-play' />
    </Button>
  );
};
