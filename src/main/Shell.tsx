import { Filters } from '../components/Filters';
import type { TChildren } from '@t/index';
import { useEffect, type FC } from 'react';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useScrollToTop } from '@hooks/scroll/useScrollToTop';
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
import { useImages } from '@pages/index/build/images/hooks/useImages';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, dispatch } = useContext();
  const images = useImages();
  useScrollControl();
  useScrollToTop();

  useEffect(() => {
    if (images.length > 0) {
      dispatch({ type: 'images', value: images });
    }
  }, [images]);

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
        onAnimationComplete={handleAnimationComplete}
      >
        <MotionConfig {...MOTION_CONFIG}>
          {children}
        </MotionConfig>
      </motion.div>
    </MotionConfig>
  );
};
