import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import { motion, transform } from 'framer-motion';
import { useState, type FC } from 'react';
import { RANGE_MIN_Y, useY } from './useY';
import { RANGE_Z, useZ } from './useZ';

type TProps = HTMLMotionProps<'img'> & {
  index: number;
  count: number;
};
export const Box: FC<TProps> = ({
  index,
  count,
  ...props
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  const y = useY(index);
  const z = useZ(index);
  const brightness = transform(
    [-RANGE_Z * 2 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [10, 110],
  )(z);
  const blur = transform(
    [-RANGE_Z * 1.5 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [2, 0],
  )(z);
  const filter = `brightness(${brightness}%) blur(${blur}px)`;

  return (
    <motion.li
      className='relative inset-0 overflow-hidden'
      style={{
        flex: 1,
        zIndex: 0,
        minHeight: 140,
        x: `-${50 * index}%`,
        y,
        z,
        filter,
        originX: '50%',
        originY: '100%',
      }}
      whileHover={{
        scale: 1.4,
        filter: 'brightness(100%) blur(0px)',
        z: RANGE_Z,
        zIndex: 1,
      }}
    >
      {!isLoaded && (
        <motion.div
          key={`loader-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          exit={{ opacity: 0 }}
          transition={{
            ...MOTION_CONFIG.transition,
            repeat: Infinity,
            duration: 2,
            delay: (index / count) * 1.5,
          }}
          className='absolute inset-0 w-full bg-baby-blue'
        />
      )}
      <motion.div className='absolute top-0 left-0 w-full'>
        <motion.img onLoad={handleLoad} {...props} />
      </motion.div>
    </motion.li>
  );
};
