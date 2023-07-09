import clsx from 'clsx';
import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { RANGE_Y } from './hooks/useY';
import { PNG_EXT, WEBP_EXT } from '@constants/media';

const BUFFER = 100;
const HEIGHT = TITLE_OFFSET + RANGE_Y + BUFFER;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({
  style: { rotateX, y },
}) => {
  const { randomIndicies, screensLookupSmall } =
    useContext();
  const entries = Object.entries(screensLookupSmall.png);
  const { isScroll } = useContext();

  return (
    <motion.div
      className='relative w-full'
      style={{
        height: HEIGHT,
        top: 0,
        pointerEvents: isScroll ? 'none' : 'unset',
      }}
    >
      <motion.ul
        className={'absolute w-full preserve-3d'}
        style={{ rotateX, y }}
      >
        {randomIndicies.map((_, index, { length }) => {
          const [filePath, resolver] = entries[index];
          const webpFilePath = filePath.replace(
            PNG_EXT,
            WEBP_EXT,
          );
          return (
            <Image
              key={filePath}
              index={index}
              count={length}
              moduleRecord={{
                [PNG_EXT]: {
                  filePath,
                  resolver,
                },
                [WEBP_EXT]: {
                  filePath: webpFilePath,
                  resolver:
                    screensLookupSmall[WEBP_EXT][
                      webpFilePath
                    ],
                },
              }}
            />
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
