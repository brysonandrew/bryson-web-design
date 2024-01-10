import { FadeDown } from '@components/vertical-fade/FadeDown';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import {
  DURATION_DARK_MODE,
  PRESENCE_OPACITY,
} from '@constants/animation';
import { useDarkMode } from '@context/dark-mode';
import { useViewport as useViewportContext } from '@context/viewport';
import { EASE } from '@hooks/style/useDarkMode';
import { AnimatePresence, motion } from 'framer-motion';

export const Fade = () => {
  const { darkKey } = useDarkMode();
  const { isVertical } = useViewportContext();

  return (
    <AnimatePresence>
      {isVertical && (
        <motion.div
          key={darkKey}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-80 z-0'
          transition={{
            duration: DURATION_DARK_MODE,
            ease: EASE,
          }}
          {...PRESENCE_OPACITY}
        >
          <FadeUp
            classValue='bottom-full left-0'
            style={{ height: 800 }}
          />
          <FadeDown
            classValue='top-full left-0'
            style={{ height: 800 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
