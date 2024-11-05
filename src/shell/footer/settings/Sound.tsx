import {
  useSound as useSoundContext,
  VolumeOff,
  VolumeOn,
} from '@brysonandrew/sounds';
import { useHover } from '@brysonandrew/motion-cursor/hooks/useHover';
import { Button } from '@brysonandrew/interactive/circle/Button';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { ICON_CLASS_VALUE_PROPS } from '../config';

export const Sound = () => {
  const { isSound, toggleSound } = useSoundContext();
  const Icon = isSound ? VolumeOn : VolumeOff;
  const title = `Turn ${isSound ? 'off' : 'on'} sound`;
  const { handlers } = useHover(
    CUSTOM_CURSOR_KEY,
    title,
  );
  const handleTap = toggleSound;

  return (
    <Button
      key={title}
      title={title}
      onTap={handleTap}
      {...handlers}
    >
      <Icon {...ICON_CLASS_VALUE_PROPS} />
    </Button>
  );
};
