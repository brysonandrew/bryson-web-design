import { Filters } from '@lib/filters';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { ClipPaths } from '@lib/media/ClipPaths';
import { Cursor } from '@lib/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from '@components/Providers';
import { Head } from '@lib/head';
import { P24Y } from '@lib/components/layout/space/P24Y';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';

export const Shell: FC = () => {
  return (
    <Providers>
      <>
        <Head />
        <Variables />
        <Filters />
        <ClipPaths />
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
