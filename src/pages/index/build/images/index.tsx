import { motion } from 'framer-motion';
import { useContext } from '@state/Context';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { RANGE_Y } from './hooks/useY';
import { resolveModuleRecord } from '@hooks/media/resolveModuleRecord';
import { TModuleRecord } from '@t/media';
import { Build as Fetch } from '@components/fetch-media/Build';
import styled from '@emotion/styled';
import { RANGE_Z } from './hooks/useZ';
import { P8 } from '@components/space/P8';
import { TITLE_HEIGHT } from '@components/space/TitleRoot';

const BUFFER = 140;
const HEIGHT = TITLE_HEIGHT + RANGE_Y + BUFFER;

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({ style }) => {
  const { rotateX, y, opacity } = style;
  const {
    randomIndicies,
    screensLookupSmall,
    buildImages,
  } = useContext();
  const entries = Object.entries(screensLookupSmall.png);

  return (
    <>
      <P8 />
      <Root
        className='relative w-full'
        style={{
          height: HEIGHT,
          opacity,
          perspective: RANGE_Z * 10,
        }}
      >
        <List
          className='absolute inset-0 preserve-3d will-change-transform'
          style={{
            rotateX,
            y,
          }}
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
        </List>
      </Root>
    </>
  );
};
