import { motion } from 'framer-motion';
import { useBuild } from '@context/domains/build';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import styled from '@emotion/styled';
import { P8 } from '@components/space/P8';
import { TITLE_HEIGHT } from '@components/space/TitleRoot';
import { useScroll as useScrollContext } from '@context/scroll';
import { useContext as useViewportContext } from '@context/viewport/Context';
import { TDepthConfig } from '@hooks/media/fake-3D/useCircle';
import { ORIGIN_50 } from '@constants/animation';
import { useSpin } from '@hooks/media/fake-3D/useSpin';

const BUFFER = 400;
const HEIGHT = TITLE_HEIGHT + BUFFER;

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = TFake3DMotionChildrenProps;
export const Images: FC<TProps> = ({ style }) => {
  const { y, opacity } = style;
  const { records } = useBuild();
  const { isScrolling } = useScrollContext();
  const spin = useSpin();

  const {
    width: viewportWidth = 0,
    halfWidth: halfViewportWidth,
    isResizing,
    isVertical,
  } = useViewportContext();
  const radius = isVertical
    ? viewportWidth
    : halfViewportWidth; // Math.max(viewportWidth, halfViewportWidth);
  const imageSize = isVertical
    ? halfViewportWidth
    : ((radius * Math.PI) / (records.length * 0.5)) * 0.7;

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
          {records.map(
            (record, index, { length: count }) => {
              // if (mediaRecord) {
              const depthConfig: TDepthConfig = {
                index,
                count,
                imageSize,
                radius,
                isVertical,
                spin,
              };
              if (isResizing) return null;

              return (
                <Image
                  isScrolling={isScrolling}
                  key={record.src}
                  index={index}
                  count={count}
                  mediaRecord={record}
                  depthConfig={depthConfig}
                />
              );
              // } else {
              //   return null;
              //   const entry = entries[randomIndex];
              //   const [filePath] = entry;
              //   const moduleRecord = resolveModuleRecord(
              //     entry,
              //     screensLookupSmall,
              //   );
              //   return (
              //     <Fetch
              //       key={filePath}
              //       index={randomIndex}
              //       moduleRecord={
              //         moduleRecord as TModuleRecord
              //       }
              //     />
              //   );
              // }
            },
            // },
          )}
        </List>
      </Root>
    </>
  );
};
