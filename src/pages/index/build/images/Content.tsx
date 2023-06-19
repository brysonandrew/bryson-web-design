import { MotionValue, motion } from 'framer-motion';
import { type FC } from 'react';
import { useImages } from './useImages';
import { Box } from './Box';
import clsx from 'clsx';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import { TChildrenProps } from './Motion';

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
        filter,
      }}
      whileHover='hover'
    >
      <motion.ul
        className={clsx(
          ROW,
          'absolute left-0 bottom-0 w-full preserve-3d perspective-12',
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
