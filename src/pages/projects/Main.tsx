import type { FC } from 'react';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { motion } from 'framer-motion';
import { List } from '@brysonandrew/gallery-list';
import { TTitle, TRest } from 'lib/copy/types';

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style, rect }) => {
  return (
    <motion.div
      className='relative column-stretch w-core will-change-transform gap-3 mt-1'
      style={{
        height: rect?.height,
        ...style,
      }}
    >
      <List<TTitle, TRest> />
    </motion.div>
  );
};
