import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { motion } from 'framer-motion';
import { useState, type FC } from 'react';
import { MOTION_BLUR_ID } from './constants';
import { useContext } from '@state/Context';

export const Root = styled(motion.img)``;

type TProps = {
  item: TMedia;
};
export const Image: FC<TProps> = ({ item }) => {
  const { isTransitioningGallery } = useContext();
  const [isLoaded, setLoaded] = useState(false);
  const { key, src } = item;

  return (
    <Root
      className='absolute left-1/2 top-1/2 max-w-full max-h-full'
      src={src}
      alt={key}
      onPointerDown={(e) => e.preventDefault()}
      style={{
        x: '-50%',
        y: '-50%',
        ...(isTransitioningGallery
          ? { filter: resolveUrlId(MOTION_BLUR_ID) }
          : {}),
      }}
    />
  );
};
