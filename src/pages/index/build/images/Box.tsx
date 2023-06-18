import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useState, type FC, useMemo } from 'react';

const RANGE_Y = 200;
const RANGE_Z = 200;

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

  const y = useMemo(() => Math.random() * RANGE_Y - RANGE_Y * 0.5, []);
  const z = useMemo(() => Math.random() * RANGE_Z - RANGE_Z * 0.5, []);
  const zm = useMotionValue(z);
  const brightness = useTransform(
    zm,
    [-100, 100],
    [40, 140],
  );
  const blur = useTransform(zm, [-100, 0], [2, 0]);
  const filter = useMotionTemplate`brightness(${brightness}%) blur(${blur}px)`;

  return (
    <motion.li
      className='relative inset-0 overflow-hidden'
      style={{
        flex: 1,
        zIndex: index,
        // height: 100,
        // width: 200,
        minHeight: 140,
        x: `-${50 * index}%`,
        y,
        // -Math.sin(((index + 0.5) / count) * Math.PI) * 20,
        z,
        filter,
        //-Math.sin(((index + 0.5) / count) * Math.PI) *
        //200,
        // rotateY: 9 * Math.random(),
        originX: '50%',
        originY: '100%',
      }}
      whileHover={{
        scale: 1.4,
        filter: 'brightness(100%) blur(0px)',
        z: 100
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
      <motion.div
        className='absolute top-0 left-0 w-full'
        initial={false}
        animate={{ y: isLoaded ? '0%' : '100%' }}
        transition={{
          ...MOTION_CONFIG.transition,
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        <motion.img onLoad={handleLoad} {...props} />
      </motion.div>
    </motion.li>
  );
};
