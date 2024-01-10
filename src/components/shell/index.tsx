import { Filters } from '../filters';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@constants/animation';
import { ClipPaths } from '@components/ClipPaths';
import { Cursor } from '@components/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from '@context/Providers';
import { Head } from './Head';
import { P24Y } from '@components/space/P24Y';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useRedirect } from '@hooks/router/useRedirect';
import Footer from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';

export const Shell: FC = () => {
  useRedirect();
  const currProject = useCurrProject();
  const isProject = Boolean(currProject);

  return (
    <Providers>
      <>
        <Head />
        <div>
          <Variables />
          <Filters />
          <ClipPaths />
          <motion.div {...PRESENCE_OPACITY}>
            <div className='relative overflow-x-hidden z-10'>
              {!isProject && <Header />}
              <P24Y />
              <div className='relative z-0'>
                <Outlet />
              </div>
              {!isProject && <Footer />}
            </div>
          </motion.div>
        </div>
        {isDesktop && <Cursor />}
      </>
    </Providers>
  );
};
