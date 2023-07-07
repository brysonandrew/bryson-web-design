import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { useState, type FC, useEffect } from 'react';
import { Image } from './Image';
import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { TMediaRecord } from '@pages/projects/config';

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

  const handleLoad = (key: string) => {
    setLoaded((prev) => {
      const next = { ...prev, [key]: true };
      return next;
    });
  };

  return (
    <motion.div
      className='relative w-full'
      style={{
        minHeight: HEIGHT,
        top: 0,
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
            const key = mediaRecord.png.key;
            return (
              <Image
                key={key}
                mediaRecord={mediaRecord}
                index={index}
                count={length}
                isLoaded={Boolean(loadedState[key])}
                onLoad={() => handleLoad(key)}
              />
            );
          },
        )}
      </motion.ul>
    </motion.div>
  );
};
