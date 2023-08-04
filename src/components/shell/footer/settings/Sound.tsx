import { Circle } from '@components/buttons/Circle';
import { VolumeOff } from '@components/icons/sound/VolumeOff';
import { useContext } from '@state/Context';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { VolumeOn } from '@components/icons/sound/VolumeOn';
import { useHoverKey } from '@hooks/useHoverKey';
import { TRANSITION } from '@constants/animation';
import { motion } from 'framer-motion';

export const Sound = () => {
  const { isSound, isScroll, dispatch } = useContext();
  const { isHover, ...handlers } = useHoverKey(
    'big',
    'sound',
  );
  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  const iconProps = {
    ...ICON_CLASS_VALUE_PROPS,
  };

  return (
    <motion.div
      animate={{
        scale: resolveScale({ isScroll, isHover }),
        x: isScroll ? 6 : 0,
      }}
      transition={{
        delay: isScroll ? 0 : 0.1,
        ...TRANSITION,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers}
    >
      <Circle aria-label='sound' onTap={handleTap}>
        {isSound ? (
          <VolumeOn {...iconProps} />
        ) : (
          <VolumeOff {...iconProps} />
        )}
      </Circle>
    </motion.div>
  );
};
