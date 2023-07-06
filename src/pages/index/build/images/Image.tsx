import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';
import { Picture } from '@components/picture';
import { TMediaRecord } from '@pages/showcase/config';
import { Placeholder } from '@components/placeholder';

type TProps = HTMLMotionProps<'img'> & {
  mediaRecord: TMediaRecord;
  index: number;
  count: number;
  isLoaded: boolean;
};
export const Image: FC<TProps> = ({
  mediaRecord,
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
      <AnimatePresence>
        {!isLoaded && (
          <Placeholder
            key='IMAGE_PLACEHOLDER'
            classValue='origin-top scale-placeholder'
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Picture mediaRecord={mediaRecord} {...props} />
      </motion.div>
    </motion.li>
  );
};
