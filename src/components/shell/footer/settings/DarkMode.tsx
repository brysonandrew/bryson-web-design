import { Circle } from '@components/buttons/circle';
import { Moon } from '@components/icons/dark-mode/Moon';
import { Sun } from '@components/icons/dark-mode/Sun';
import { useContext } from '@state/Context';
import { resolveVerticalShiftPresence } from '@utils/animation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { useHoverKey } from '@hooks/useHoverKey';
import { TRANSITION } from '@constants/animation';
import { Button } from '@components/buttons/circle/Button';

export const DarkMode = () => {
  const { darkMode, isScroll } = useContext();
  const { isHover, ...handlers } = useHoverKey(
    'dark-mode',
    'dark-mode',
  );
  const handleTap = () => {
    darkMode.toggle();
  };
  const iconProps = (origin: `${number}%`) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(origin),
  });
  const scale = resolveScale({ isHover, isScroll });

  return (
    <motion.div
      animate={{ scale, x: isScroll ? 20 : 0 }}
      transition={{
        delay: isScroll ? 0.1 : 0,
        ...TRANSITION,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers}
    >
      <Circle
        aria-label='dark-mode'
        classValue='overflow-hidden preserve-3d perspective-1000'
      >
        <Button onTap={handleTap}>
          <AnimatePresence mode='wait' initial={false}>
            {darkMode.isDarkMode ? (
              <Moon {...iconProps('-100%')} />
            ) : (
              <Sun {...iconProps('100%')} />
            )}
          </AnimatePresence>
        </Button>
      </Circle>
    </motion.div>
  );
};
