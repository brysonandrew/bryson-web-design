import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { type FC } from 'react';
import type { TChildrenProps } from '../Motion';
import { useImages } from './useImages';
import { Box } from './Box';
import clsx from 'clsx';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';

const ROW = 'flex';

type TProps = Partial<TChildrenProps>;
export const Images: FC<TProps> = () => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(
    scrollY,
    [0, 400],
    [0, 45],
  );
  const images = useImages();
  return (
    <motion.div
      className='relative w-full'
      style={{ height: 160 + TITLE_OFFSET }}
      whileHover='hover'
    >
      <motion.ul
        className={clsx(
          ROW,
          'absolute left-0 bottom-0 w-full preserve-3d perspective-8',
        )}
        style={{ width: '200%', rotateX }}
      >
        {images.map((image, index, { length }) => (
          <Box
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
