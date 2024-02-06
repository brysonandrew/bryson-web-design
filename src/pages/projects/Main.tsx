import type { FC } from 'react';
import { TPartialParallaxMotionProps } from '@brysonandrew/parallax/config';
import { motion } from 'framer-motion';
import { List } from '@brysonandrew/gallery-list';
import { TTitle, TRest } from '@app/gallery/types';

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
