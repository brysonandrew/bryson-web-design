import { type FC } from 'react';
import { Global } from './global';
import { Cursor } from '@brysonandrew/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from 'src/shell/Providers';
import { P24Y } from '@brysonandrew/space/P24Y';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';
import { FadeEdgePair } from '@brysonandrew/fade-edge/pairs/FadeEdgePair';
import { motion } from 'framer-motion';

export const Shell: FC = () => {
  return (
    <>
      <Providers>
        <>
          {/* {import.meta.env.DEV && <Hud />} */}
          <motion.div className='fill-screen bg-darkest' />
          <motion.div className='fill-screen bg-lightest' />
          <Global />
          <P24Y />
          <Outlet />
          <FadeEdgePair
            direction='to bottom'
            isFixed
            midColor='var(--transparent)'
            darkEdgeColor='var(--black-04)'
            lightEdgeColor='var(--white-04)'
            darkClass='opacity-dark'
            lightClass='opacity-light'
          />
          <Header />
          <Footer />
          {isDesktop && <Cursor />}
        </>
      </Providers>
    </>
  );
};
