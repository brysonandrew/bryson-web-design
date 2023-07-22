import styled from '@emotion/styled';
import { resolveUrlId } from '@utils/resolveUrlId';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { MOTION_BLUR_ID } from './constants';
import { useContext } from '@state/Context';
import { Picture } from '@components/picture';
import { isSafari, isBrowser } from 'react-device-detect';
import { useLoadImage } from '@hooks/media/useLoadImage';
import { TDimensions, TMediaRecord } from '@t/media';
import { Responsive } from '@components/placeholder/Responsive';
import { resolveKey } from '@components/placeholder/resolveKey';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { TChildren } from '@t/index';

export const Root = styled(motion.div)``;

type TProps = {
  mediaRecord: TMediaRecord;
  container: TDimensions;
  children(image: HTMLImageElement): TChildren;
};
export const Image: FC<TProps> = ({
  mediaRecord,
  container,
  children,
}) => {
  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.png.src,
  );
  const { isTransitioningGallery } = useContext();

  const dimensions = useImageDimensions({
    container,
    image: resolveDimensions(image),
  });
  const isDimensions = dimensions !== null;
  return (
    <>
      {!isLoaded && (
        <Responsive key={resolveKey(mediaRecord.png.src)} />
      )}
      {mediaRecord && (
        <Picture
          imageRef={imageRef}
          mediaRecord={mediaRecord}
          className='absolute left-1/2 top-1/2'
          style={{
            opacity: isLoaded && isDimensions ? 1 : 0,
            x: '-50%',
            y: '-50%',
            ...(isTransitioningGallery &&
            !(isSafari && isBrowser)
              ? { filter: resolveUrlId(MOTION_BLUR_ID) }
              : {}),
          }}
          {...(isDimensions ? dimensions : {})}
        />
      )}
      {image && children(image)}
    </>
  );
};
