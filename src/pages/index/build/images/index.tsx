import { motion } from 'framer-motion';
import { useBuild } from '@context/domains/build';
import { type FC } from 'react';
import { Image } from './Image';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import styled from '@emotion/styled';
import { P8 } from '@components/space/P8';
import { TITLE_HEIGHT } from '@components/space/TitleRoot';
import { useScroll as useScrollContext } from '@context/scroll';
import { useViewport as useViewportContext } from '@context/viewport';
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
    : halfViewportWidth;
  const imageSize = isVertical
    ? halfViewportWidth
    : ((radius * Math.PI) / (records.length * 0.5)) * 0.7;

  const listStyle = isVertical
    ? {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        z: 0,
        y: '-16vh',
      }
    : {
        rotateY: 0,
        rotateX: -4,
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
        {!isResizing && (
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
                const depthConfig: TDepthConfig = {
                  index,
                  count,
                  imageSize,
                  radius,
                  isVertical,
                  spin,
                };

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
              },
            )}
          </List>
        )}
      </Root>
    </>
  );
};
