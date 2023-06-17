import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState, type FC } from 'react';

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

  return (
    <motion.li
      className='relative inset-0'
      style={{
        flex: 1,
        zIndex: index,
        minHeight: 100,
        x: `-${50 * index}%`,
        y:
          -Math.sin(((index + 0.5) / count) * Math.PI) * 20,
        originX: '50%',
        originY: '100%',
      }}
      whileHover={{
        y: -20,
        scale: 1.4,
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
