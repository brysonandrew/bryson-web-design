import styled from '@emotion/styled';
import { Filters } from '../components/filters';
import type { TChildren } from '@t/index';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_01,
  ZERO_MOTION_CONFIG,
  resolveDynamicSlowMotionConfig,
} from '@constants/animation';
import { Processor } from '@components/icons/background/Processor';
import { useContext } from '@state/Context';
import { ClipPaths } from '@components/ClipPaths';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { Cursor } from '@components/cursor';
import { isDesktop } from 'react-device-detect';

const Root = styled.div``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, dispatch } = useContext();
  useScrollControl();

  const handleAnimationComplete = () =>
    dispatch({ type: 'init' });

  const resolveTransition = (delay: number) =>
    isInit
      ? resolveDynamicSlowMotionConfig({ delay })
      : ZERO_MOTION_CONFIG;

  return (
    <>
      <Root>
        <Variables />
        <Filters />
        <ClipPaths />
        <AnimatePresence mode='wait'>
          <Background>
            <Processor
              width='100%'
              height='100%'
              classValue='dark:fill-gray fill-baby-blue'
              {...PRESENCE_OPACITY_01}
              {...resolveTransition(0.28)}
            />
          </Background>
        </AnimatePresence>
        <motion.div
          {...PRESENCE_OPACITY}
          {...resolveTransition(0.8)}
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      </Root>
      {isDesktop && <Cursor />}
    </>
  );
};
