import { Filters } from '@lib/filters';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@lib/animation/constants';
import { ClipPaths } from '@lib/media/ClipPaths';
import { Cursor } from '@lib/cursor';
import { isDesktop } from 'react-device-detect';
import { Providers } from '@components/Providers';
import { Head } from '../../../lib/head';
import { P24Y } from '@lib/components/layout/space/P24Y';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';
import { useRedirect } from '@lib/hooks/router/useRedirect';
import { Footer } from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';
import {
  COLOR_RECORD,
  COLOR_VARS_CSS,
} from '@app/colors/constants';

export const Shell: FC = () => {
  useRedirect();
  const currProject = useCurrProject();
  const isProject = Boolean(currProject);
  //console.log(COLOR_RECORD, COLOR_VARS_CSS, COLOR_RECORD);
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
