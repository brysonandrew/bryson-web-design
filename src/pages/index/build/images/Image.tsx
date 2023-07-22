import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useDepthStyle } from './hooks/useDepthStyle';
import { RANGE_Z } from './hooks/useZ';
import { useX } from './hooks/useX';
import { Picture } from '@components/picture';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import { resolveDynamicSlowMotionConfig } from '@constants/animation';
import { INIT } from '@components/filters/presets';
import { TMediaRecord } from '@t/media';
import { useLoadImage } from '@hooks/media/useLoadImage';
import { useTo } from '@hooks/media/nav/useTo';
import { resolveKey } from '@components/placeholder/resolveKey';
import { Small as Placeholder } from '@components/placeholder/Small';

export const IMAGE_SIZE = 320;

type TProps = HTMLMotionProps<'img'> & {
  index: number;
  randomIndex: number;
  count: number;
  mediaRecord: TMediaRecord;
};
export const Image: FC<TProps> = (props) => {
  const { index, count, mediaRecord, ...pictureProps } =
    props;
  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.png.src,
  );
  const to = useTo({
    next: mediaRecord.png.name,
    project: mediaRecord.png.project,
  });

  const depthStyle = useDepthStyle();
  const xStyle = useX({ index, count });

  const imageDimensions = resolveDimensions(image);

  const dimensions = useImageDimensions({
    container: { width: IMAGE_SIZE, height: IMAGE_SIZE },
    image: imageDimensions,
  });
  const motionConfig = resolveDynamicSlowMotionConfig({
    delay: index / count,
  });

  return (
    <motion.li
      className='absolute'
      style={{
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
        ...motionConfig,
      }}
    >
      <Link className='cursor-zoom-in' to={to}>
        {!isLoaded && (
          <Placeholder key={resolveKey(index)} />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            ...motionConfig,
          }}
        >
          <Picture
            imageRef={imageRef}
            mediaRecord={mediaRecord}
            {...dimensions}
            {...pictureProps}
          />
        </motion.div>
      </Link>
    </motion.li>
  );
};
