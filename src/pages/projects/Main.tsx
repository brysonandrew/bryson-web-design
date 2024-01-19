import type { FC } from 'react';
import { TParallaxMotionChildrenProps } from '@brysonandrew/lib/animation/components/parallax/config';
import { motion } from 'framer-motion';
import { List } from '@brysonandrew/lib/gallery/list';
import { TTitle, TSlug, TRest } from '@app/gallery/types';

type TProps = Partial<TParallaxMotionChildrenProps>;
export const Main: FC<TProps> = ({ style, rect }) => {
  return (
    <motion.div
      className='relative column-stretch w-core will-change-transform gap-3 mt-1'
      style={{
        height: rect?.height,
        ...style,
      }}
    >
      <List<TTitle, TSlug, TRest> />
    </motion.div>
  );
};
