import { Circle } from '@components/buttons/Circle';
import { VolumeOff } from '@components/icons/VolumeOff';
import { VolumeOn } from '@components/icons/VolumeOn';
import { useContext } from '@state/Context';

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  return (
    <Circle aria-label='sound' onTap={handleTap}>
      {isSound ? <VolumeOn /> : <VolumeOff />}
    </Circle>
  );
};
