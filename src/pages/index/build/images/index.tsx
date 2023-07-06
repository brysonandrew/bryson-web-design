import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { useState, type FC, useEffect } from 'react';
import { Image } from './Image';
import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { TMediaRecord } from '@pages/showcase/config';

const HEIGHT = 164 + TITLE_OFFSET;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({
  style: { filter, rotateX, y },
  rectConfig: { onUpdateRect },
}) => {
  const { images } = useContext();
  const [loadedState, setLoaded] = useState<
    Record<string, boolean>
  >({});
  const { isScroll } = useContext();

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
      className='relative w-full'
      style={{
        top: 40,
        height: HEIGHT,
        pointerEvents: isScroll ? 'none' : 'unset',
        filter,
      }}
      {...PRESENCE_OPACITY_SHIFT}
    >
      <motion.ul
        className={clsx('flex relative w-full preserve-3d')}
        style={{ rotateX, y }}
      >
        {images.map(
          (
            mediaRecord: TMediaRecord,
            index,
            { length },
          ) => {
            const src = mediaRecord.png.src;
            return (
              <Image
                key={src}
                src={src}
                mediaRecord={mediaRecord}
                index={index}
                count={length}
                isLoaded={Boolean(loadedState[src])}
                onLoad={() => handleLoad(src)}
              />
            );
          },
        )}
      </motion.ul>
    </motion.div>
  );
};
