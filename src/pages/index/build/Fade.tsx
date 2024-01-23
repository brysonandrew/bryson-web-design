import { FadeDown } from '@brysonandrew/layout/vertical-fade/FadeDown';
import { FadeUp } from '@brysonandrew/layout/vertical-fade/FadeUp';
import {
  PRESENCE_OPACITY,
  TRANSITION_DARK_MODE,
} from '@brysonandrew/animation';
import { useViewport } from '@brysonandrew/viewport';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '@brysonandrew/dark-mode';

export const Fade = () => {
  const { darkKey } = useDarkMode();
  const { isVertical } = useViewport();

  return (
    <AnimatePresence>
      {isVertical && (
        <motion.div
          key={darkKey}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-80 z-0'
          transition={TRANSITION_DARK_MODE}
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
