import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FC, useRef } from 'react';
import { MOTION_BLUR_ID } from '../constants';
import { useContext } from '@state/Context';
import { Placeholder } from '../Placeholder';
import { useLoadImage } from './useLoadImage';
import { Zoom } from './zoom/Zoom';
import { TBaseProps } from '../../types';
import { Control } from './Control';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  item: TMedia;
};
export const Image: FC<TProps> = ({ item, width }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const { key, src } = item;
  const image = ref.current;
  const isLoaded = useLoadImage({
    image,
    src,
  });
  const { isTransitioningGallery } = useContext();

  return (
    <Control item={item} width={width} image={image}>
      <motion.img
        ref={ref}
        className='absolute left-1/2 top-1/2 max-w-full max-h-full'
        src={src}
        alt={key}
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
          <Placeholder key='IMAGE_PLACEHOLDER' />
        )}
      </AnimatePresence>
    </Control>
  );
};
