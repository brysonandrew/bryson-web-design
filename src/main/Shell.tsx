import { Filters } from '../components/filters';
import type { TChildren } from '@t/index';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import { MotionConfig, motion } from 'framer-motion';
import {
  INIT_MOTION_CONFIG,
  MOTION_CONFIG,
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_01,
  ZERO_MOTION_CONFIG,
} from '@constants/animation';
import { Processor } from '@components/icons/Processor';
import { useContext } from '@state/Context';
import { ClipPaths } from '@components/ClipPaths';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, dispatch } = useContext();
  const handleAnimationComplete = () =>
    dispatch({ type: 'init', value: null });

  const resolveTransition = (delay: number) =>
    isInit
      ? {
          transition: {
            ease: 'linear',
            delay,
            duration: 1,
          },
        }
      : ZERO_MOTION_CONFIG;

  return (
    <MotionConfig {...INIT_MOTION_CONFIG}>
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
            fill='gray'
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
          {children}
        </MotionConfig>
      </motion.div>
    </MotionConfig>
  );
};
