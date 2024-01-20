import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@brysonandrew/cursor/switch/config';
import { PRESENCE_OPACITY } from '@brysonandrew/animation/config/constants';
import { useCursor } from '@brysonandrew/cursor/context/useCursor';
import { AnimatePresence, motion } from 'framer-motion';
import { Touch } from '@brysonandrew/gallery/viewer/tips/Touch';
import { P2 } from '@brysonandrew/base/components/layout/space/P2';
import { createPortal } from 'react-dom';
import { isDesktop } from 'react-device-detect';
import { useCurrProject } from '@brysonandrew/gallery/viewer/hooks/params/useCurrProject';
import { useApp } from '@brysonandrew/app/useApp';

export const Tips = () => {
  const { COLOR, GLOW_BOX, BORDER_RADIUS } = useApp();
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
                      backgroundColor: COLOR.secondary,
                      boxShadow: GLOW_BOX.secondary,
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
                        backgroundColor: COLOR.accent,
                        boxShadow: GLOW_BOX.accent,
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
