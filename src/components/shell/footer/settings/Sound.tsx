import { VolumeOff } from '@components/icons/sound/VolumeOff';
import { useSound as useSoundContext } from '@context/sound';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { VolumeOn } from '@components/icons/sound/VolumeOn';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@components/buttons/circle/Button';

export const Sound = () => {
  const { isSound, toggleSound } = useSoundContext();

  const Icon = isSound ? VolumeOn : VolumeOff;
  const title = `Turn ${isSound ? 'off' : 'on'} sound`;
  const { handlers } = useHoverKey('sound', title);
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
