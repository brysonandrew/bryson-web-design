import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { useViewer as useContext } from '@brysonandrew/gallery';
import { Picture } from '@brysonandrew/media/picture';
import { useLoadImage } from '@brysonandrew/media/hooks/useLoadImage';
import {
  TDimensions,
  TMediaRecord,
} from '@brysonandrew/media/config/types';
import { useImageDimensions } from '@brysonandrew/media/hooks/useImageDimensions';
import { TChildren } from '@brysonandrew/config-types/dom';
import { MotionBlur } from '@brysonandrew/svg-filter/motion-blur';

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
  const { isTransitioningGallery, Placeholder } =
    useContext();

  const dimensions = useImageDimensions({
    container,
    image: mediaRecord,
  });
  const isDimensions = dimensions !== null;
  return (
    <>
      {!isLoaded && <Placeholder key={mediaRecord.src} />}
      {mediaRecord && (
        <MotionBlur
          isOn={isTransitioningGallery}
          motionValue={motionX}
          axis='x'
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
