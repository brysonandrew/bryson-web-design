import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Global } from './global';
import { PRESENCE_OPACITY } from '@brysonandrew/animation/config/constants';
import { Cursor } from '@brysonandrew/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from 'src/shell/Providers';
import { P24Y } from '@brysonandrew/base/components/layout/space/P24Y';
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
