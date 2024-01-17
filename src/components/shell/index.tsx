import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Global } from './global';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { Cursor } from '@lib/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from '@components/Providers';
import { P24Y } from '@lib/components/layout/space/P24Y';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';

export const Shell: FC = () => {
  return (
    <Providers>
      <>
        <Global />
        <motion.div
          className='relative overflow-x-hidden z-0'
          {...PRESENCE_OPACITY}
        >
          <Header />
          <P24Y />
          <Outlet />
          <Footer />
        </motion.div>
        {isDesktop && <Cursor />}
      </>
    </Providers> 
  );
};
