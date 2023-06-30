import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { useState, type FC, useEffect } from 'react';
import { Image } from './Image';
import { useImages } from './hooks/useImages';
import { TChildrenProps } from '../../../../components/fake-3d/Motion';
import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';

const HEIGHT = 164 + TITLE_OFFSET;

type TProps = Partial<TChildrenProps>;
export const Images: FC<TProps> = ({
  y,
  rotateX,
  filter,
  onUpdateRect,
}) => {
  const [loadedState, setLoaded] = useState<
    Record<string, boolean>
  >({});
  const { isScroll } = useContext();
  const images = useImages();

  const loadedCount = Object.keys(loadedState).length;

  useEffect(() => {
    if (loadedCount === images.length && onUpdateRect) {
      onUpdateRect();
    }
  }, [loadedCount]);

  const handleLoad = (src: string) => {
    setLoaded((prev) => {
      const next = { ...prev, [src]: true };
      return next;
    });
  };
  return (
    <motion.div
      style={{
        height: HEIGHT,
        pointerEvents: isScroll ? 'none' : 'unset',
        filter,
      }}
      {...PRESENCE_OPACITY_SHIFT}
    >
      <motion.ul
        className={clsx(
          'flex relative left-0 bottom-0 w-full preserve-3d',
        )}
        style={{ width: '200%', rotateX, y }}
      >
        {images.map((image, index, { length }) => {
          const src = image.default;
          return (
            <Image
              key={src}
              src={src}
              index={index}
              count={length}
              isLoaded={Boolean(loadedState[src])}
              onLoad={() => handleLoad(src)}
            />
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
