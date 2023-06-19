import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useState, type FC, useMemo } from 'react';

const RANGE_Y = 20;
const RANGE_MIN_Y = 10;

const RANGE_Z = 100;

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
  const y = useMemo(
    () =>
      index % 2 === 0
        ? -Math.random() * RANGE_Y - RANGE_MIN_Y
        : Math.random() * RANGE_Y + RANGE_MIN_Y,
    [index],
  );
  const z = useMemo(
    () =>
      -RANGE_MIN_Y * index -
      RANGE_Z * Math.random() -
      RANGE_Z,
    [],
  );
  const zm = useMotionValue(z);
  const brightness = useTransform(
    zm,
    [-RANGE_Z * 2 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [40, 110],
  );
  const blur = useTransform(
    zm,
    [-RANGE_Z * 2 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [4, 0],
  );
  const filter = useMotionTemplate`brightness(${brightness}%) blur(${blur}px)`;

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
        zIndex: 1
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
