import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@brysonandrew/lib/cursor/switch/config';
import { PRESENCE_OPACITY } from '@brysonandrew/lib/animation/constants';
import { useCursor } from '@brysonandrew/lib/cursor/context';
import { AnimatePresence, motion } from 'framer-motion';
import { Touch } from '@brysonandrew/lib/gallery/viewer/tips/Touch';
import { P2 } from '@brysonandrew/lib/components/layout/space/P2';
import { createPortal } from 'react-dom';
import { isDesktop } from 'react-device-detect';
import { useCurrProject } from '@brysonandrew/lib/gallery/viewer/hooks/params/useCurrProject';
import { useApp } from '@brysonandrew/lib/context/app/useApp';

export const Tips = () => {
  const { secondary, accent, BORDER_RADIUS } = useApp();
  const currProject = useCurrProject();
  const { hoverKey } = useCursor();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
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
                    className='relative row top-0 p-1'
                    style={{
                      ...secondary,
                      borderRadius: BORDER_RADIUS.XL,
                    }}
                    {...PRESENCE_OPACITY}
                  >
                    <Touch />
                  </motion.li>
                  <P2 element='li' />
                  {cursorKey === PROJECT_CURSOR_KEY && (
                    <motion.li
                      key='SECOND'
                      className='p-1 row'
                      style={{
                        ...accent,
                        borderRadius: BORDER_RADIUS.XL,
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
