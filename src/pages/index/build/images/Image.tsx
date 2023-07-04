import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';
import { Placeholder } from '@components/images/Placeholder';

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
        <Placeholder index={index} count={count} />
      )}
      <motion.div className='absolute top-0 left-0 w-full'>
        <motion.img {...props} />
      </motion.div>
    </motion.li>
  );
};
