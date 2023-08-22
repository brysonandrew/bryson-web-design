import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { FC, Fragment } from 'react';
import { useContext } from '@context/domains/gallery/Context';
import { useContext as useScrollContext } from '@context/scroll/Context';

import { Nav } from './Nav';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { SCROLL_DECORATION_PRESENCE } from '@constants/animation';
import { Network } from '@components/network';
import { P2 } from '@components/space/P2';
import { useContext as useDarkModeContext } from '@context/dark-mode/Context';

const Root = styled.header``;

export const Header: FC = () => {
    const {
    darkMode: { isDarkMode },
  } = useDarkModeContext();

  const { isScroll } = useScrollContext();
  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence initial={false} mode='sync'>
        {isScroll ? (
          <FadeDown
            key={`FADE_DOWN_${
              isDarkMode ? 'DARK' : 'LIGHT'
            }`}
            style={{ height: '24vh' }}
            {...SCROLL_DECORATION_PRESENCE}
          />
        ) : (
          <Nav key='NAV' />
        )}
        <P2 key='P2' />
        <Network key='Network' />
      </AnimatePresence>
    </Root>
  );
};
