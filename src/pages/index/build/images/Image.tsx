import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState, type FC } from 'react';
import { useDepthStyle } from './hooks/useDepthStyle';
import { resolveFilter } from './hooks/resolveFilter';

type TProps = HTMLMotionProps<'img'> & {
  index: number;
  count: number;
};
export const Image: FC<TProps> = ({
  index,
  count,
  ...props
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };

  const depthStyle = useDepthStyle({ index, count });

  return (
    <motion.li
      className='relative inset-0 overflow-hidden'
      style={{
        flex: 1,
        minHeight: 140,
        ...depthStyle,
      }}
      whileHover={{
        scale: 1.4,
        filter: resolveFilter({ blur: 0, brightness: 100 }),
        z: 0,
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
