import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { useScroll as useScrollContext } from '@lib/context/scroll';
import { Nav } from './Nav';
import { FadeDown } from '@lib/components/decoration/vertical-fade/FadeDown';
import {
  PRESENCE_OPACITY,
  TRANSITION_DARK_MODE,
} from '@lib/constants/animation';
import { Network } from '@lib/components/base/network';
import { P2 } from '@lib/components/layout/space/P2';
import { useDarkMode } from '@lib/hooks/dark-mode/context';

const Root = styled.header``;

export const Header: FC = () => {
  const { darkKey } = useDarkMode();
  const { isScroll } = useScrollContext();

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence
        initial={false}
        mode={isScroll ? 'wait' : 'sync'}
      >
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
      <P2 />
      <Network key='Network' />
    </Root>
  );
};
