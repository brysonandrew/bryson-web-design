import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
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
      className='relative'
      style={{
        flex: 1,
        zIndex: index,
        height: 100,
        backgroundColor: 'blue',
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
      <AnimatePresence mode="wait">
        {isLoaded ? null : (
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
      </AnimatePresence>
      <motion.img
        initial={false}
        animate={{ y: isLoaded ? '0%' : '100%' }}
        transition={{
          ...MOTION_CONFIG.transition,
          duration: 0.4,
          ease: 'easeOut',
        }}
        onLoad={handleLoad}
        {...props}
      />
    </motion.li>
  );
};
