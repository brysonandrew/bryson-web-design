import { Filters } from '../components/Filters';
import type { TChildren } from '@t/index';
import type { FC } from 'react';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useScrollToTop } from '@hooks/scroll/useScrollToTop';
import { Variables } from '@css/Variables';
import { Background } from '@components/background';
import { MotionConfig, motion } from 'framer-motion';
import {
  MOTION_CONFIG,
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_01,
} from '@constants/animation';
import { Processor } from '@components/icons/Processor';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useScrollControl();
  useScrollToTop();

  const resolveTransition = (delay: number) => ({
    transition: {
      ease: 'linear',
      delay,
      duration: 1,
    },
  });

  return (
    <>
      <Variables />
      <Filters />
      <motion.div
        {...PRESENCE_OPACITY}
        {...resolveTransition(0.1)}
      >
        <Background>
          <Processor
            width='100%'
            height='100%'
            fill='gray'
            {...PRESENCE_OPACITY_01}
            {...resolveTransition(1.1)}
          />
        </Background>
      </motion.div>
      <motion.div
        {...PRESENCE_OPACITY}
        {...resolveTransition(2.1)}
      >
        <MotionConfig {...MOTION_CONFIG}>
          {children}
        </MotionConfig>
      </motion.div>
    </>
  );
};
