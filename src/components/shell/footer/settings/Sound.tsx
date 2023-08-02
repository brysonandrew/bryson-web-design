import { Circle } from '@components/buttons/Circle';
import { VolumeOff } from '@components/icons/sound/VolumeOff';
import { useContext } from '@state/Context';
import { ICON_CLASS_VALUE_PROPS } from '../constants';
import { VolumeOn } from '@components/icons/sound/VolumeOn';

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  const iconProps = {
    ...ICON_CLASS_VALUE_PROPS,
  };

  return (
    <Circle aria-label='sound' onTap={handleTap}>
      {isSound ? (
        <VolumeOn {...iconProps} />
      ) : (
        <VolumeOff {...iconProps} />
      )}
    </Circle>
  );
};
