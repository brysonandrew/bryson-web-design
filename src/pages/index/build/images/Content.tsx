import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { type FC } from 'react';
import { Image } from './Image';
import { TChildrenProps } from './Motion';
import { useImages } from './hooks/useImages';
const ROW = 'flex';

type TProps = Partial<TChildrenProps>;
export const Content: FC<TProps> = ({
  rotateX,
  filter,
}) => {
  const { isScroll } = useContext();
  const images = useImages();
  return (
    <motion.div
      className='relative w-full'
      style={{
        height: 160 + TITLE_OFFSET,
        pointerEvents: isScroll ? 'none' : 'unset',
        filter
      }}
      whileHover='hover'
    >
      <motion.ul
        className={clsx(
          ROW,
          'absolute left-0 bottom-0 w-full preserve-3d',
        )}
        style={{ width: '200%', rotateX }}
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
