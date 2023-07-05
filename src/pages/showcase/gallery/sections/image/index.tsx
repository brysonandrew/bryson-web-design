import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FC, useRef } from 'react';
import { MOTION_BLUR_ID } from '../constants';
import { useContext } from '@state/Context';
import { Placeholder } from '../Placeholder';
import { useLoadImage } from './useLoadImage';
import { Zoom } from './Zoom';
import { TBaseProps } from '../../types';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  item: TMedia;
};
export const Image: FC<TProps> = ({ item, width }) => {
  const [isHover, setHover] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);
  const image = ref.current;
  const { key, src } = item;
  const isLoaded = useLoadImage({
    image,
    src,
  });
  const { isTransitioningGallery } = useContext();
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      className='relative'
      style={{ width: width.footer }}
    >
      <motion.img
        ref={ref}
        className='absolute left-1/2 top-1/2 max-w-full max-h-full'
        src={src}
        alt={key}
        onPointerDown={(e) => e.preventDefault()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity: isLoaded ? 1 : 0.5,
          x: '-50%',
          y: '-50%',
          ...(isTransitioningGallery
            ? { filter: resolveUrlId(MOTION_BLUR_ID) }
            : {}),
        }}
      />
      {isHover && image && (
        <Zoom image={image} media={item} />
      )}
      <AnimatePresence>
        {!isLoaded && (
          <Placeholder key='IMAGE_PLACEHOLDER' />
        )}
      </AnimatePresence>
    </div>
  );
};
