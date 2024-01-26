import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Nav } from './Nav';
import { FadeDown } from '@brysonandrew/fade/FadeDown';
import { PRESENCE_OPACITY } from '@app/animation';
import {
  TRANSITION_DARK_MODE,
  useDarkMode,
} from '@brysonandrew/dark-mode';
import { useScroll } from '@brysonandrew/scroll';

const Root = styled.header``;

export const Header: FC = () => {
  const { darkKey } = useDarkMode();
  const { isScroll } = useScroll();

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-40'>
      <AnimatePresence initial={false}>
        {!isScroll ? (
          <Nav key='NAV' />
        ) : (
          <FadeDown
            key={`FADE_DOWN_${darkKey.toUpperCase()}`}
            style={{ height: '24vh' }}
            transition={TRANSITION_DARK_MODE}
            {...PRESENCE_OPACITY}
          />
        )}
      </AnimatePresence>
    </Root>
  );
};
