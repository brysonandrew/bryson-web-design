import { MOTION_CONFIG } from '@constants/animation';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';

type TProps = HTMLMotionProps<'img'> & {
  index: number;
  count: number;
  isLoaded: boolean;
};
export const Image: FC<TProps> = ({
  index,
  count,
  isLoaded,
  ...props
}) => {
  const depthStyle = useDepthStyle({ index, count });

  return (
    <motion.li
      className='relative inset-0 overflow-hidden'
      style={{
        flex: 1,
        minHeight: 140,
        cursor: 'zoom-in',
        ...depthStyle,
      }}
      whileHover={{
        scale: 1.4,
        filter: resolveFilter({
          blur: 0,
          brightness: 100,
          grayscale: 0,
        }),
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
        <motion.img {...props} />
      </motion.div>
    </motion.li>
  );
};
