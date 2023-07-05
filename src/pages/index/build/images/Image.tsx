import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';
import { Placeholder } from '@components/images/Placeholder';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';

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
  const depthStyle = useDepthStyle();
  const xStyle = useX({ index, count });

  return (
    <motion.li
      className='absolute'
      style={{
        cursor: 'zoom-in',
        ...xStyle,
        ...depthStyle,
      }}
      whileHover={{
        scale: 1.4,
        filter: resolveFilter({
          blur: 0,
          brightness: 100,
          grayscale: 0,
        }),
        z: RANGE_Z,
        zIndex: RANGE_Z,
      }}
    >
      {!isLoaded && (
        <Placeholder index={index} count={count} />
      )}
      <motion.img {...props} />
    </motion.li>
  );
};
