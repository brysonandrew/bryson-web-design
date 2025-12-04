import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Main } from './main';
import { Pages } from './pages';
import { isMobile } from 'react-device-detect';
import { PRESENCE_DOWN_Y } from '@app/animation';
import { useScroll } from '@brysonandrew/motion-scroll';
import { Network } from '@brysonandrew/network';
import { OFFLINE_ICON } from '@brysonandrew/icons-keys/network';

const Root = styled.header``;

export const Header: FC = () => {
  const { isScroll } = useScroll();
  return (
    <Root className="fixed top-0 left-0 w-full my-6 px-6 h-0 z-10">
      <AnimatePresence initial={false}>
        {!isScroll && (
          <motion.nav
            className="w-shell row-start-space"
            {...(!isMobile ? PRESENCE_DOWN_Y : {})}
          >
            <div>
              <Main />
              <div className="row relative -left-2 top-3">
                <Network />
              </div>
            </div>

            <Pages />
          </motion.nav>
        )}
      </AnimatePresence>
    </Root>
  );
};
