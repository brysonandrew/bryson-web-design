import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@lib/cursor/switch/config';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { useCursor } from '@lib/cursor/context';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { AnimatePresence, motion } from 'framer-motion';
import { Touch } from '@pages/projects/gallery/tips/Touch';
import { P2 } from '@lib/components/layout/space/P2';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from '@components/decoration/mark/config';
import { createPortal } from 'react-dom';
import { isDesktop } from 'react-device-detect';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';

export const Tips = () => {
  const currProject = useCurrProject();
  const { hoverKey } = useCursor();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const { isDarkMode } = useDarkMode();
  return (
    <>
      {!isDesktop && (
        <AnimatePresence>
          {!currProject && (
            <>
              {createPortal(
                <ul
                  key='ROOT'
                  className='fixed top-1/4 -translate-y-1/2 right-2  text-white-9 pointer-events-none z-10'
                >
                  <motion.li
                    key='FIRST'
                    className='relative row top-0 p-1 rounded-full'
                    style={{
                      ...resolveColor(isDarkMode),
                      ...resolveGlowColor(isDarkMode),
                    }}
                    {...PRESENCE_OPACITY}
                  >
                    <Touch />
                  </motion.li>
                  <P2 element='li' />
                  {cursorKey === PROJECT_CURSOR_KEY && (
                    <motion.li
                      key='SECOND'
                      className='p-1 row rounded-full'
                      style={{
                        ...resolveHoverColor(isDarkMode),
                        ...resolveGlowColor(isDarkMode),
                      }}
                      {...PRESENCE_OPACITY}
                    >
                      <Touch />
                    </motion.li>
                  )}
                </ul>,
                document.body,
              )}
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
};
