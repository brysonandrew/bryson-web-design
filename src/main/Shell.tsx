import styled from '@emotion/styled';
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
} from '@constants/animation';
import { Processor } from '@components/icons/Processor';
import { useContext } from '@state/Context';
import { ClipPaths } from '@components/ClipPaths';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { Cursor } from '@components/cursor';
import { isDesktop } from 'react-device-detect';

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
        <MotionConfig {...SLOW_MOTION_CONFIG}>
          <Variables />
          <Filters />
          <ClipPaths />
          <AnimatePresence mode='wait'>
            <Background key={isDarkMode ? 'dark' : 'light'}>
              <Processor
                width='100%'
                height='100%'
                classValue='dark:fill-gray-3 fill-baby-blue'
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
            <MotionConfig {...MOTION_CONFIG}>
              <>{children}</>
            </MotionConfig>
          </motion.div>
        </MotionConfig>
      </Root>
      {isDesktop && <Cursor />}
    </>
  );
};
