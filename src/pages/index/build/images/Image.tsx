import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';
import { Picture } from '@components/picture';
import { TMediaRecord } from '@pages/projects/config';
import { Placeholder } from '@components/placeholder';

const IMAGE_WIDTH = 240;

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
  const imageRef = useRef<HTMLImageElement | null>(null);
  const image = imageRef.current;

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
        <Picture
          width={`${IMAGE_WIDTH}px`}
          height={`${
            ~~(image
              ? image.naturalHeight /
                (image.naturalWidth / IMAGE_WIDTH)
              : 0)
          }px`}
          imageRef={imageRef}
          mediaRecord={mediaRecord}
          {...props}
        />
      </motion.div>
    </motion.li>
  );
};
