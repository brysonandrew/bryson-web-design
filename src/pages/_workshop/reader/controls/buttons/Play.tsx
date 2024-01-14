import { Button } from '../../components/Buttons';
import { usePlay } from '@pages/_workshop/reader/hooks/usePlay';
import { useReader } from '@pages/_workshop/reader/context';
import { GLOW_BABY_BLUE_4 } from '@uno/rules/glow';
import { I } from '@lib/components/decoration/Icon';

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
      <I classValue='w-8 h-8' icon='mdi-play' />
    </Button>
  );
};
