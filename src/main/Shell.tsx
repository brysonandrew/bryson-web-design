import styled from '@emotion/styled';
import { Filters } from '../components/filters';
import type { TChildren } from '@t/index';
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

const Root = styled.div``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, onInit } = useApp();
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
