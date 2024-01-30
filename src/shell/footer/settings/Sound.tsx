import {
  useSound as useSoundContext,
  VolumeOff,
  VolumeOn,
} from '@brysonandrew/sounds';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { Button } from '@brysonandrew/interactive/circle/Button';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { ICON_CLASS_VALUE_PROPS } from '../config';

export const Sound = () => {
  const { isSound, toggleSound } = useSoundContext();
  const Icon = isSound ? VolumeOn : VolumeOff;
  const title = `Turn ${isSound ? 'off' : 'on'} sound`;
  const { handlers } = useHoverKey(
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
