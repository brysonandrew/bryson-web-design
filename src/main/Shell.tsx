import { Filters } from '../components/filters';
import type { TChildren } from '@t/index';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import {
  AnimatePresence,
  MotionConfig,
  motion,
} from 'framer-motion';
import {
  SLOW_MOTION_CONFIG,
  MOTION_CONFIG,
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_01,
  ZERO_MOTION_CONFIG,
  resolveDynamicSlowMotionConfig,
  PRESENCE_OPACITY_SHIFT,
} from '@constants/animation';
import { Processor } from '@components/icons/Processor';
import { useContext } from '@state/Context';
import { ClipPaths } from '@components/ClipPaths';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useHtmlTitle } from '@hooks/useHtmlTitle';
import { Network } from '@components/network';
import styled from '@emotion/styled';

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const {
    isInit,
    darkMode: { isDarkMode },
    dispatch,
  } = useContext();
  useHtmlTitle();
  useScrollControl();
  const handleAnimationComplete = () =>
    dispatch({ type: 'init', value: null });

  const resolveTransition = (delay: number) =>
    isInit
      ? resolveDynamicSlowMotionConfig({ delay })
      : ZERO_MOTION_CONFIG;

  return (
    <Root
      key={isDarkMode ? 'dark' : 'light'}
    >
      <MotionConfig {...SLOW_MOTION_CONFIG}>
        <Variables />
        <Filters />
        <ClipPaths />
        <motion.div
          {...PRESENCE_OPACITY}
          {...resolveTransition(0)}
        >
          <Background>
            <Processor
              width='100%'
              height='100%'
              classValue='dark:fill-gray fill-gray-2'
              {...PRESENCE_OPACITY_01}
              {...resolveTransition(0.28)}
            />
          </Background>
        </motion.div>
        <motion.div
          {...PRESENCE_OPACITY}
          {...resolveTransition(0.8)}
          onAnimationComplete={handleAnimationComplete}
        >
          <MotionConfig {...MOTION_CONFIG}>
            <Network>{children}</Network>
          </MotionConfig>
        </motion.div>
      </MotionConfig>
    </Root>
  );
};
