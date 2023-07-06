import styled from '@emotion/styled';
import type { TMediaRecord } from '@pages/projects/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC, useRef } from 'react';
import { MOTION_BLUR_ID } from '../constants';
import { useContext } from '@state/Context';
import { Placeholder } from '../../../../../components/placeholder';
import { useLoadImage } from './useLoadImage';
import { TBaseProps } from '../../types';
import { Control } from './Control';
import { Picture } from '@components/picture';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  mediaRecord: TMediaRecord;
};
export const Image: FC<TProps> = ({
  mediaRecord,
  width,
}) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const image = ref.current;

  const isLoaded = useLoadImage({
    image,
    src: mediaRecord.png.src,
  });

  const { isTransitioningGallery } = useContext();

  return (
    <Control
      mediaRecord={mediaRecord}
      width={width}
      image={isLoaded ? image : null}
    >
      <Picture
        imageRef={ref}
        mediaRecord={mediaRecord}
        className='absolute left-1/2 top-1/2 max-w-full max-h-full'
        style={{
          opacity: isLoaded ? 1 : 0,
          x: '-50%',
          y: '-50%',
          ...(isTransitioningGallery
            ? { filter: resolveUrlId(MOTION_BLUR_ID) }
            : {}),
        }}
      />
      <AnimatePresence>
        {!isLoaded && (
          <Placeholder
            key='IMAGE_PLACEHOLDER'
            classValue='origin-center scale-placeholder sm:scale-placeholder_sm md:scale-placeholder_md'
          />
        )}
      </AnimatePresence>
    </Control>
  );
};
