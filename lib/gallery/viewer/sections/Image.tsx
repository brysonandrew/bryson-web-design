import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import { type FC } from 'react';
import { useViewer as useContext } from '@brysonandrew/lib/gallery/viewer/context/useViewer';
import { Picture } from '@brysonandrew/lib/media/picture';
import { useLoadImage } from '@brysonandrew/lib/hooks/media/useLoadImage';
import {
  TDimensions,
  TMediaRecord,
} from '@brysonandrew/lib/media/picture/config/types';
import { useImageDimensions } from '@brysonandrew/lib/hooks/media/useImageDimensions';
import { TChildren } from '@brysonandrew/lib/types/dom';
import { MotionBlur } from '@brysonandrew/lib/filters/motion-blur';
import { resolveKey } from '@brysonandrew/lib/media/placeholder/utils/resolveKey';
import { Responsive } from '@brysonandrew/lib/media/placeholder/variants/Responsive';

export const Root = styled(motion.div)``;

type TProps = {
  mediaRecord: TMediaRecord;
  container: TDimensions;
  motionX: MotionValue;
  children(image: HTMLImageElement): TChildren;
};
export const Image: FC<TProps> = ({
  mediaRecord,
  container,
  motionX,
  children,
}) => {
  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.src,
  );
  const { isTransitioningGallery } = useContext();

  const dimensions = useImageDimensions({
    container,
    image: mediaRecord,
  });
  const isDimensions = dimensions !== null;
  return (
    <>
      {!isLoaded && (
        <Responsive key={resolveKey(mediaRecord.src)} />
      )}
      {mediaRecord && (
        <MotionBlur
          isOn={isTransitioningGallery}
          motionValue={motionX}
          direction='x'
        >
          {(filterProps) => (
            <Picture
              imageRef={imageRef}
              mediaRecord={mediaRecord}
              className='absolute left-1/2 top-1/2'
              style={{
                opacity: isDimensions ? 1 : 0,
                x: '-50%',
                y: '-50%',
                ...filterProps,
              }}
              {...(isDimensions ? dimensions : {})}
            />
          )}
        </MotionBlur>
      )}
      {image && children(image)}
    </>
  );
};
