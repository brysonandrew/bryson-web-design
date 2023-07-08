import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { resolveFilter } from './hooks/resolveFilter';
import { useDepthStyle } from './hooks/useDepthStyle';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';
import { Picture } from '@components/picture';
import { TMediaRecord } from '@pages/projects/config';
import { Placeholder } from '@components/placeholder';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';

export const IMAGE_SIZE = 320;

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
  const imageRef = useRef<HTMLImageElement | null>(null);

  const depthStyle = useDepthStyle();
  const xStyle = useX({ index, count });
  const image = imageRef.current;
  const dimensions = useImageDimensions({
    container: { width: IMAGE_SIZE, height: IMAGE_SIZE },
    image: resolveDimensions(image),
  });

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
        <Placeholder
          key='IMAGE_PLACEHOLDER'
          classValue='origin-top placeholder'
        />
      )} 
      <motion.div
        initial={false}
        animate={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Picture
          imageRef={imageRef}
          mediaRecord={mediaRecord}
          {...dimensions}
          {...props}
        />
      </motion.div>
    </motion.li>
  );
};
