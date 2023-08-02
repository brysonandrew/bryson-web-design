import { motion } from 'framer-motion';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';
import { useContext } from '@state/Context';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { RANGE_Y } from './hooks/useY';
import { resolveModuleRecord } from '@hooks/media/resolveModuleRecord';
import { TModuleRecord } from '@t/media';
import { Build as Fetch } from '@components/fetch-media/Build';

const BUFFER = 140;
const HEIGHT = TITLE_OFFSET + RANGE_Y + BUFFER;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({
  style: { rotateX, y },
}) => {
  const {
    randomIndicies,
    screensLookupSmall,
    buildImages,
  } = useContext();
  const entries = Object.entries(screensLookupSmall.png);

  return (
    <div
      className='relative w-full top-0'
      style={{
        height: HEIGHT
      }}
    >
      <motion.ul
        className='absolute w-full preserve-3d'
        style={{ rotateX, y }}
      >
        {randomIndicies.map(
          (randomIndex, index, { length }) => {
            const mediaRecord = buildImages[randomIndex];

            if (mediaRecord) {
              return (
                <Image
                  key={mediaRecord.png.key}
                  index={index}
                  randomIndex={randomIndex}
                  count={length}
                  mediaRecord={mediaRecord}
                />
              );
            } else {
              const entry = entries[randomIndex];
              const [filePath] = entry;
              const moduleRecord = resolveModuleRecord(
                entry,
                screensLookupSmall,
              );
              return (
                <Fetch
                  key={filePath}
                  index={randomIndex}
                  moduleRecord={
                    moduleRecord as TModuleRecord
                  }
                />
              );
            }
          },
        )}
      </motion.ul>
    </div>
  );
};
