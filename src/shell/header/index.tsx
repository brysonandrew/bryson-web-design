import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Main } from './main';
import { Pages } from './pages';
import { isMobile } from 'react-device-detect';
import { PRESENCE_DOWN_Y } from '@app/animation';
import { useScroll } from '@brysonandrew/scroll';

const Root = styled.header``;

export const Header: FC = () => {
  const { isScroll } = useScroll();
  return (
    <Root className='fixed top-0 left-0 w-full p-6 h-0 z-10'>
      <AnimatePresence initial={false}>
        {!isScroll && (
          <motion.nav
            className='row-start-space w-full'
            {...(!isMobile ? PRESENCE_DOWN_Y : {})}
          >
            <Main />
            <Pages />
          </motion.nav>
        )}
      </AnimatePresence>
    </Root>
  );
};
