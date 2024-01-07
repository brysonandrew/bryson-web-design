import styled from '@emotion/styled';
import { Filters } from '../components/filters';
import type { TChildren } from '@t/index';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_005,
  ZERO_MOTION_CONFIG,
  resolveDynamicSlowMotionConfig,
} from '@constants/animation';
import { Processor } from '@components/icons/background/Processor';
import { useDarkMode } from '@context/dark-mode';
import { ClipPaths } from '@components/ClipPaths';
import { Cursor } from '@components/cursor';
import { isDesktop } from 'react-device-detect';
import { useApp } from '@context/app';
import { Providers } from '@context/Providers';

const Root = styled.div``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, onInit } = useApp();
  const { darkKey } = useDarkMode();
  const handleAnimationComplete = onInit;
  const resolveTransition = (delay: number) =>
    isInit
      ? resolveDynamicSlowMotionConfig({ delay })
      : ZERO_MOTION_CONFIG;

  return (
    <Providers>
      <>
        <Root>
          <Variables />
          <Filters />
          <ClipPaths />
          {/* <AnimatePresence mode='wait'>
            <Background>
              <Processor
                key={darkKey}
                width='100%'
                height='100%'
                classValue='dark:fill-gray fill-baby-blue'
                {...PRESENCE_OPACITY_005}
                {...resolveTransition(0.28)}
              />
            </Background>
          </AnimatePresence> */}
          <motion.div
            {...PRESENCE_OPACITY}
            {...resolveTransition(isInit ? 0 : 0)}
            onAnimationComplete={handleAnimationComplete}
          >
            {children}
          </motion.div>
        </Root>
        {isDesktop && <Cursor />}
      </>
    </Providers>
  );
};
