import { PRESENCE_OPACITY } from '@brysonandrew/motion-config-constants';
import {
  CUSTOM_CURSOR_KEY,
  useCursor,
} from '@brysonandrew/motion-cursor';
import { AnimatePresence, motion } from 'framer-motion';
import { Touch } from '@brysonandrew/gallery-viewer/tips/Touch';
import { P2 } from '@brysonandrew/space/P2';
import { createPortal } from 'react-dom';
import { isDesktop } from 'react-device-detect';
import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { useApp } from '@brysonandrew/app';
import { Fragment } from 'react';
import { InView } from '@brysonandrew/in-view';
import { GALLERY_ICON } from '@brysonandrew/icons-keys';

export const Tips = () => {
  const { COLOR, GLOW_BOX, BORDER_RADIUS } = useApp();
  const currProject = useCurrProject();
  const { hoverParts } = useCursor();
  return (
    <>
      {!isDesktop && (
        <InView className='absolute w-full h-full top-1/2 -translate-y-1/2 left-0'>
          {({ inView }) => (
            <AnimatePresence>
              {inView && !currProject && (
                <Fragment key='ROOT'>
                  {createPortal(
                    <motion.ul
                      key='Tips'
                      className='fixed top-1/4 -translate-y-1/2 right-2  text-white pointer-events-none z-10'
                      {...PRESENCE_OPACITY}
                    >
                      <motion.li
                        key='FIRST'
                        className='relative row top-0 p-1'
                        style={{
                          backgroundColor: COLOR.primary,
                          boxShadow: GLOW_BOX.primary,
                          borderRadius: BORDER_RADIUS.XL,
                        }}
                        {...PRESENCE_OPACITY}
                      >
                        <Touch />
                      </motion.li>
                      <P2 element='li' />
                      {hoverParts[0] ===
                        CUSTOM_CURSOR_KEY &&
                        hoverParts[2] ===
                          GALLERY_ICON && (
                          <motion.li
                            key='SECOND'
                            className='p-1 row'
                            style={{
                              backgroundColor: COLOR.accent,
                              boxShadow: GLOW_BOX.accent,
                              borderRadius:
                                BORDER_RADIUS.XL,
                            }}
                            {...PRESENCE_OPACITY}
                          >
                            <Touch />
                          </motion.li>
                        )}
                    </motion.ul>,
                    document.body,
                  )}
                </Fragment>
              )}
            </AnimatePresence>
          )}
        </InView>
      )}
    </>
  );
};
