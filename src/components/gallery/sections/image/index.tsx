import styled from '@emotion/styled';
import { resolveUrlId } from '@utils/resolveUrlId';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { MOTION_BLUR_ID } from '../constants';
import { useContext } from '@state/Context';
import { Placeholder } from '@components/placeholder';
import { TBaseProps } from '../../types';
import { Control } from './Control';
import { Picture } from '@components/picture';
import { isSafari, isBrowser } from 'react-device-detect';
import { useLoadImage } from '@hooks/media/useLoadImage';
import { TMediaRecord } from '@t/media';
import { Responsive } from '@components/placeholder/Responsive';
import { resolveKey } from '@components/placeholder/resolveKey';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  mediaRecord: TMediaRecord;
};
export const Image: FC<TProps> = ({
  mediaRecord,
  width,
}) => {
  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.png.src,
  );
  const { isTransitioningGallery } = useContext();

  return (
    <Control
      mediaRecord={mediaRecord}
      width={width}
      image={isLoaded ? image : null}
    >
      {(dimensions) => (
        <>
          {!isLoaded && (
            <Responsive
              key={resolveKey(mediaRecord.png.src)}
            />
          )}
          {mediaRecord && (
            <Picture
              imageRef={imageRef}
              mediaRecord={mediaRecord}
              className='absolute left-1/2 top-1/2'
              style={{
                opacity: isLoaded ? 1 : 0.5,
                x: '-50%',
                y: '-50%',
                ...(isTransitioningGallery &&
                !(isSafari && isBrowser)
                  ? { filter: resolveUrlId(MOTION_BLUR_ID) }
                  : {}),
              }}
              {...dimensions}
            />
          )}
        </>
      )}
    </Control>
  );
};
