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
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useCurrName } from '@hooks/params/useCurrName';
import clsx from 'clsx';

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
  const name = useCurrName();
  const handleOnSound = useOnSound();
  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.png.src,
  );
  const to = useTo({
    next: mediaRecord.png.name,
    project: mediaRecord.png.project,
  });
  const { z, ...depthStyle } = useDepthStyle();
  const xStyle = useX({ index, count });
  const imageDimensions = resolveDimensions(image);
  const dimensions = useImageDimensions({
    container: { width: IMAGE_SIZE, height: IMAGE_SIZE },
    image: imageDimensions,
  });

  const resolveDelay = () => {
    if (name) {
      const n = Number(name);
      if (!isNaN(n)) {
        return Math.abs(index - n) / count;
      }
    }
    return index / count;
  };
  const delay = resolveDelay();
  const motionConfig = resolveDynamicSlowMotionConfig({
    delay,
  });
  const isGallery = Boolean(name);

  return (
    <motion.li
      className={clsx(
        'absolute',
        isGallery && 'pointer-events-none',
      )}
      style={{
        ...xStyle,
        ...depthStyle,
        zIndex: z,
      }}
      whileHover={{
        scale: 1.4,
        filter: INIT,
        z: RANGE_Z,
        zIndex: RANGE_Z,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        z,
        scale: isGallery ? 0 : 1,
        ...motionConfig,
      }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={handleOnSound}
    >
      <Link className='cursor-zoom-in' to={to}>
        {!isLoaded && (
          <Placeholder key={resolveKey(index)} />
        )}
        <Picture
          imageRef={imageRef}
          mediaRecord={mediaRecord}
          initial={false}
          animate={{
            opacity: isLoaded ? 1 : 0,
          }}
          {...dimensions}
          {...pictureProps}
        />
      </Link>
    </motion.li>
  );
};
