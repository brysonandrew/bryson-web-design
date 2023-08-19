import { Circle } from '@components/buttons/circle';
import { VolumeOff } from '@components/icons/sound/VolumeOff';
import { useContext } from '@state/Context';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { VolumeOn } from '@components/icons/sound/VolumeOn';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { TRANSITION } from '@constants/animation';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@components/buttons/circle/Button';

export const Sound = () => {
  const { isSound, isScroll, dispatch } = useContext();

  const title = `Turn ${isSound ? 'off' : 'on'} sound`;

  const { isHover, handlers } = useHoverKey('sound', title);
  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  const iconProps = {
    ...ICON_CLASS_VALUE_PROPS,
  };

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={title}
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
        <Circle>
          <Button title={title} onTap={handleTap}>
            {isSound ? (
              <VolumeOn {...iconProps} />
            ) : (
              <VolumeOff {...iconProps} />
            )}
          </Button>
        </Circle>
      </motion.div>
    </AnimatePresence>
  );
};
