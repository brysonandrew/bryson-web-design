import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { type FC } from 'react';
import { Image } from './image';
import { useImages } from './image/hooks/useImages';
import { TChildrenProps } from './motion';
import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';

export const HEIGHT = 164 + TITLE_OFFSET;

type TProps = Partial<TChildrenProps>;
export const Swarm: FC<TProps> = ({
  y,
  rotateX,
  filter,
}) => {
  const { isScroll } = useContext();
  const images = useImages();
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
          'flex absolute left-0 bottom-0 w-full preserve-3d',
        )}
        style={{ width: '200%', rotateX, y }}
      >
        {images.map((image, index, { length }) => (
          <Image
            key={image.default}
            src={image.default}
            index={index}
            count={length}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
};
