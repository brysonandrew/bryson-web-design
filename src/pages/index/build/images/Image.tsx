import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { useDepthStyle } from './hooks/useDepthStyle';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';
import { Picture } from '@components/picture';
import { Placeholder } from '@components/placeholder';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import {
  MID_MOTION_CONFIG,
  resolveDynamicMotionConfig,
} from '@constants/animation';
import { INIT } from '@components/filters/presets';
import { TModuleRecord } from '@t/media';
import { useMediaRecord } from '@hooks/media/useMediaRecord';

export const IMAGE_SIZE = 320;

type TProps = HTMLMotionProps<'img'> & {
  index: number;
  count: number;
  moduleRecord: TModuleRecord;
};
export const Image: FC<TProps> = ({
  index,
  count,
  moduleRecord,
  ...props
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const mediaRecord = useMediaRecord(moduleRecord);
  const isLoaded = Boolean(mediaRecord);

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
        filter: INIT,
        z: RANGE_Z,
        zIndex: RANGE_Z,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        ...resolveDynamicMotionConfig({
          delay: index / 10,
        }),
      }}
    >
      {!isLoaded && (
        <Placeholder
          key='IMAGE_PLACEHOLDER'
          classValue='origin-top placeholder'
          {...MID_MOTION_CONFIG}
        />
      )}
      <motion.div
        initial={false}
        animate={{ opacity: isLoaded ? 1 : 0 }}
      >
        {mediaRecord && (
          <Picture
            imageRef={imageRef}
            mediaRecord={mediaRecord}
            {...dimensions}
            {...props}
          />
        )}
      </motion.div>
    </motion.li>
  );
};
