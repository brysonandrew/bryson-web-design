import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { AnimatePresence, motion } from 'framer-motion';
import {
  useState,
  type FC,
  useRef,
  useEffect,
} from 'react';
import { MOTION_BLUR_ID } from './constants';
import { useContext } from '@state/Context';
import { Placeholder } from './Placeholder';

export const Root = styled(motion.div)``;

type TProps = {
  item: TMedia;
};
export const Image: FC<TProps> = ({ item }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const { isTransitioningGallery } = useContext();
  const [isLoaded, setLoaded] = useState(false);
  const { key, src } = item;

  useEffect(() => {
    const handleLoad = () => {
      if (ref.current) {
        ref.current.onload = () => {
          setLoaded(true);
        };
        ref.current.src = src;
      }

      setLoaded(false);
    };

    handleLoad();
  }, []);

  return (
    <>
      <motion.img
        ref={ref}
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
      />
      <AnimatePresence>
        {!isLoaded && (
          <Placeholder key='IMAGE_PLACEHOLDER' />
        )}
      </AnimatePresence>
    </>
  );
};
