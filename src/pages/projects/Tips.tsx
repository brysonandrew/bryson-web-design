import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/base/cursor/switch/config';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useCursor } from '@components/base/cursor/context';
import { useDarkMode } from '@hooks/dark-mode/context';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Touch } from '@components/decoration/icons/tips/Touch';
import { P2 } from '@components/layout/space/P2';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from '@components/decoration/mark/config';
import { createPortal } from 'react-dom';

const Root = styled.ul``;

export const Tips = () => {
  const { hoverKey } = useCursor();
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const { isDarkMode } = useDarkMode();
  return (
    <>
      {createPortal(
        <Root
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
        </Root>,
        document.body,
      )}
    </>
  );
};
