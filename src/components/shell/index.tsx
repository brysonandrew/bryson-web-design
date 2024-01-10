import styled from '@emotion/styled';
import { Filters } from '../filters';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { motion } from 'framer-motion';
import {
  PRESENCE_OPACITY,
  ZERO_MOTION_CONFIG,
  resolveDynamicSlowMotionConfig,
} from '@constants/animation';
import { ClipPaths } from '@components/ClipPaths';
import { Cursor } from '@components/cursor';
import { isDesktop } from 'react-device-detect';
import { useApp } from '@context/app';
import { Providers } from '@context/Providers';
import { Head } from './Head';
import { P24Y } from '@components/space/P24Y';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useProjectsRedirect } from '@hooks/router/useProjectsRedirect';
import Footer from './footer';
import { Header } from './header';
import { Outlet } from 'react-router';

const Root = styled.div``;
const Content = styled.div``;

export const Shell: FC = () => {
  useProjectsRedirect();
  const currProject = useCurrProject();
  const isProject = Boolean(currProject);
  const { isInit, onInit } = useApp();
  const handleAnimationComplete = onInit;
  const resolveTransition = (delay: number) =>
    isInit
      ? resolveDynamicSlowMotionConfig({ delay })
      : ZERO_MOTION_CONFIG;

  return (
    <Providers>
      <>
        <Head />
        <Root>
          <Variables />
          <Filters />
          <ClipPaths />
          <motion.div
            {...PRESENCE_OPACITY}
            {...resolveTransition(isInit ? 0 : 0)}
            onAnimationComplete={handleAnimationComplete}
          >
            <Root className='relative overflow-x-hidden z-10'>
              {!isProject && <Header />}
              <P24Y />
              <Content className='relative z-0'>
                <Outlet />
              </Content>
              {!isProject && <Footer />}
            </Root>
          </motion.div>
        </Root>
        {isDesktop && <Cursor />}
      </>
    </Providers>
  );
};
