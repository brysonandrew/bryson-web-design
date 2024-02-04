import { Plus } from '@pages/index/tech/icons/Plus';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TPartialParallaxMotionProps } from '@brysonandrew/parallax/config';
import { Transform } from './Transform';
import { TECH } from '@pages/index/tech/config/constants';

type TProps = TPartialParallaxMotionProps;
export const Links: FC<TProps> = ({ style }) => {
  const glowKey: keyof TPartialParallaxMotionProps['style'] =
    'rotateX';
  if (typeof style[glowKey] === 'undefined') return null;

  return (
    <Transform motionValue={style[glowKey]}>
      {(glow) => (
        <motion.div className='center' style={style}>
          <motion.div
            className='column gap-2 ml-2 lg:row preserve-3d'
            style={style}
          >
            <Item glow={glow} {...TECH.REACT} />
            <div className='center w-full xl:pt-1'>
              <Plus classValue='h-7 w-7' />
            </div>
            <Item glow={glow} {...TECH.TYPESCRIPT} />
          </motion.div>
        </motion.div>
      )}
    </Transform>
  );
};
