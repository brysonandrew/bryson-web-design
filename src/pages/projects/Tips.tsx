import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/cursor/switch/config';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useContext } from '@context/cursor/Context';
import { useContext as useDarkModeContext } from '@context/dark-mode/Context';

import styled from '@emotion/styled';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Touch } from '@components/icons/tips/Touch';
import { P2 } from '@components/space/P2';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from '@components/mark/config';
import { createPortal } from 'react-dom';

const Root = styled(motion.ul)``;

export const Tips = () => {
  const { hoverKey } = useContext();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const {
    darkMode: { isDarkMode },
  } = useDarkModeContext();
  return (
    <>
      {createPortal(
        <Root
          key='ROOT'
          className='fixed top-1/4 -translate-y-1/2 right-2  text-white pointer-events-none z-10'
        >
          <motion.li
            key='FIRST'
            className='relative top-0 p-1 rounded-full'
            style={{
              ...resolveColor(isDarkMode),
              ...resolveGlowColor(isDarkMode),
            }}
            {...PRESENCE_OPACITY}
          >
            <Touch />
          </motion.li>
          <P2 as='li' />
          {cursorKey === PROJECT_CURSOR_KEY && (
            <motion.li
              key='SECOND'
              className='p-1 rounded-full'
              style={{
                ...resolveHoverColor(isDarkMode),
                ...resolveGlowColor(isDarkMode),
              }}
              {...PRESENCE_OPACITY}
            >
              <Touch />
            </motion.li>
          )}
        </Root>,
        document.body,
      )}
    </>
  );
};
