import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FC } from 'react';
import { MOTION_BLUR_ID } from './constants';
import { useContext } from '@state/Context';
import { PRESENCE_OPACITY_06 } from '@constants/animation';

export const Root = styled(motion.div)``;

type TProps = {
  item: TMedia;
};
export const Image: FC<TProps> = ({ item }) => {
  const { isTransitioningGallery } = useContext();
  const [isLoaded, setLoaded] = useState(false);
  const { key, src } = item;

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <motion.img
        className='absolute left-1/2 top-1/2 max-w-full max-h-full'
        src={src}
        alt={key}
        onPointerDown={(e) => e.preventDefault()}
        style={{
          opacity: isLoaded ? 1 : 0.5,
          x: '-50%',
          y: '-50%',
          ...(isTransitioningGallery
            ? { filter: resolveUrlId(MOTION_BLUR_ID) }
            : {}),
        }}
        onLoad={handleLoad}
      />
      <AnimatePresence>
        {!isLoaded && (
          <motion.figure
            key='IMAGE_PLACEHOLDER'
            className='relative bg-teal-bright w-full h-full'
            {...{
              initial: { opacity: 0 },
              animate: { opacity: [0, 0.4, 0] },
              exit: { opacity: 0 },
              transition: {
                repeat: Infinity,
                duration: 2,
              },
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
