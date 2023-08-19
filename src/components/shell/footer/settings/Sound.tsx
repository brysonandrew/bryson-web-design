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
  const Icon = isSound ? VolumeOn : VolumeOff;
  const title = `Turn ${isSound ? 'off' : 'on'} sound`;
  const { isHover, handlers } = useHoverKey('sound', title);
  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
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
        <Circle isHover={isHover}>
          <Button title={title} onTap={handleTap}>
            <Icon {...ICON_CLASS_VALUE_PROPS} />
          </Button>
        </Circle>
      </motion.div>
    </AnimatePresence>
  );
};
