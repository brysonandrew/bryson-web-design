import { motion } from 'framer-motion';
import { useContext } from '@context/domains/build/Context';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { resolveModuleRecord } from '@hooks/media/resolveModuleRecord';
import { TModuleRecord } from '@t/media';
import { Build as Fetch } from '@components/fetch-media/Build';
import styled from '@emotion/styled';
import { P8 } from '@components/space/P8';
import { TITLE_HEIGHT } from '@components/space/TitleRoot';
import { useContext as useViewportContext } from '@context/viewport/Context';
import { TDepthConfig } from '@hooks/media/fake-3D/usePosition';
import { ORIGIN_50 } from '@constants/animation';

const BUFFER = 400;
const HEIGHT = TITLE_HEIGHT + BUFFER;

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({ style }) => {
  const { y, opacity } = style;
  const {
    randomIndicies,
    screensLookupSmall,
    buildImages,
  } = useContext();
  const entries = Object.entries(screensLookupSmall.png);
  const {
    width: viewportWidth = 0,
    isResizing,
    isFlipped,
  } = useViewportContext();
  const isVertical = isFlipped;
  const halfViewportWidth = viewportWidth * 0.5;

  const radius = isVertical
    ? viewportWidth
    : halfViewportWidth; // Math.max(viewportWidth, halfViewportWidth);
  const imageSize = isVertical
    ? halfViewportWidth
    : ((radius * Math.PI) / (randomIndicies.length * 0.5)) *
      0.7;

  // const rotate = useTransform(scroll.y, (v) => v * 0.5);
  const listStyle = isVertical
    ? {
        rotateY: 0, // -2,
        rotateX: 0, // rotate,
        x: 0,
        z: 0, //-1000,
        y: 0,
      }
    : {
        rotateY: 0, // rotate,
        rotateX: -4, // 2,
        x: radius,
        z: 0,
        y: 0,
      };

  return (
    <>
      <P8 />
      <Root
        className='relative w-full z-0'
        style={{
          height: HEIGHT,
          opacity,
          y,
          ...ORIGIN_50,
        }}
      >
        <List
          className='absolute inset-0 h-0 w-0 preserve-3d will-change-transform'
          style={{
            perspective: 10000,
            ...ORIGIN_50,
            ...listStyle,
          }}
        >
          {randomIndicies.map(
            (randomIndex, index, { length: count }) => {
              const mediaRecord = buildImages[randomIndex];

              if (mediaRecord) {
                const depthConfig: TDepthConfig = {
                  index,
                  name: mediaRecord.png.name,
                  count,
                  imageSize,
                  radius,
                  isVertical,
                };
                if (isResizing) return null;
                return (
                  <Image
                    key={mediaRecord.png.key}
                    index={index}
                    randomIndex={randomIndex}
                    count={count}
                    mediaRecord={mediaRecord}
                    depthConfig={depthConfig}
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
