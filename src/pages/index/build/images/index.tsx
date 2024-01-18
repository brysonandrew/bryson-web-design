import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useBuild } from '@pages/index/build/context';
import { type FC } from 'react';
import { Image } from './Image';
import { TParallaxMotionChildrenProps } from '@lib/animation/components/parallax/config';
import styled from '@emotion/styled';
import { P8 } from '@lib/components/layout/space/P8';
import { TITLE_HEIGHT } from '@lib/components/layout/space/TitleSpace';
import { useScroll as useScrollContext } from '@lib/context/scroll/useScroll';
import { useViewport as useViewportContext } from '@lib/context/viewport/useViewport';
import { TPositionConfig } from '@pages/index/build/images/hooks/useCircle';
import { ORIGIN_50 } from '@lib/animation/constants';
import { useSpin } from '@pages/index/build/images/hooks/useSpin';
import { TMediaRecord } from '@ops/screens/process/config/types';

const BUFFER = 440;
const HEIGHT = TITLE_HEIGHT + BUFFER;

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

type TProps = TParallaxMotionChildrenProps;
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
    : ((radius * Math.PI) /
        ((records ?? []).length * 0.5)) *
      0.7;

  const listStyle = isVertical
    ? {
        rotateY: 0,
        rotateX: 0,
        x: -halfViewportWidth,
        z: 0,
        y: -400,
      }
    : {
        rotateY: 0,
        rotateX: -4,
        x: 0,
        z: 0,
        y: -180,
      };

  return (
    <>
      <P8 />
      <Root
        className={clsx(
          'center relative w-full',
          !isVertical && 'z-50',
        )}
        style={{
          height: HEIGHT,
          opacity,
          y,
          x: '0%',
          ...ORIGIN_50,
        }}
      >
        {!isResizing && (
          <List
            className='h-0 w-0 preserve-3d will-change-transform'
            style={{
              perspective: 10000,
              ...ORIGIN_50,
              ...listStyle,
            }}
          >
            {records?.map(
              (
                record: TMediaRecord,
                index: number,
                { length: count }: TMediaRecord[],
              ) => {
                const positionConfig: TPositionConfig = {
                  index,
                  count,
                  imageSize,
                  radius,
                  isVertical,
                  spin,
                };

                return (
                  <Image
                    key={record.src}
                    isScrolling={isScrolling}
                    index={index}
                    count={count}
                    mediaRecord={record}
                    positionConfig={positionConfig}
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
