import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { useScroll as useScrollContext } from 'lib/context/scroll/useScroll';
import { Nav } from './Nav';
import { FadeDown } from 'lib/components/layout/vertical-fade/FadeDown';
import {
  PRESENCE_OPACITY,
  TRANSITION_DARK_MODE,
} from 'lib/animation/constants';
import { useDarkMode } from 'lib/context';

const Root = styled.header``;

export const Header: FC = () => {
  const { darkKey } = useDarkMode();
  const { isScroll } = useScrollContext();

  return (
    <Root className='column-start gap-2 fixed top-0 left-0 w-full h-0 z-10'>
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
