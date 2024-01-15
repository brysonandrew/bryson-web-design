import { VolumeOff } from '@lib/icons/components/sound/VolumeOff';
import { useSound as useSoundContext } from '@lib/hooks/sounds/context';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { VolumeOn } from '@lib/icons/components/sound/VolumeOn';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@lib/components/interactive/circle/Button';
import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';

export const Sound = () => {
  const { isSound, toggleSound } = useSoundContext();

  const Icon = isSound ? VolumeOn : VolumeOff;
  const title = `Turn ${isSound ? 'off' : 'on'} sound`;
  const { handlers } = useHoverKey(CUSTOM_CURSOR_KEY, title);
  const handleTap = toggleSound;

  return (
    <AnimatePresence initial={false} mode='wait'>
      <Button
        key={title}
        title={title}
        onTap={handleTap}
        {...handlers}
      >
        <Icon {...ICON_CLASS_VALUE_PROPS} />
      </Button>
    </AnimatePresence>
  );
};
