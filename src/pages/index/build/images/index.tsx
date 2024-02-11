import { useBuild } from '@pages/index/build/BuildProvider';
import { type FC } from 'react';
import { Image } from './Image';
import { TPartialParallaxMotionProps } from '@brysonandrew/parallax/config';
import { P8 } from '@brysonandrew/space/P8';
import { TITLE_HEIGHT } from '@brysonandrew/space/TitleSpace';
import { useScroll } from '@brysonandrew/scroll';
import { useViewport } from '@brysonandrew/viewport';
import { TPositionConfig } from '@pages/index/build/images/hooks/useCircle';
import { useSpin } from '@pages/index/build/images/hooks/useSpin';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { ORIGIN_50 } from '@pages/index/build/config/constants';
import { motion } from 'framer-motion';

const BUFFER = 440;
const HEIGHT = TITLE_HEIGHT + BUFFER;

type TProps = TPartialParallaxMotionProps;
export const Images: FC<TProps> = ({ style }) => {
  const { y, opacity } = style;
  const { records } = useBuild();
  const { isScrolling } = useScroll();
  const spin = useSpin();
  const {
    width: viewportWidth = 0,
    halfWidth: halfViewportWidth,
    isResizing,
    isVertical,
  } = useViewport();

  const radius = isVertical
    ? viewportWidth
    : halfViewportWidth;

  const verticalImageSize = viewportWidth * 0.7;
  const horizontalImageSize =
    ((radius * Math.PI) / ((records ?? []).length * 0.5)) *
    0.7;

  const imageSize = isVertical
    ? verticalImageSize
    : horizontalImageSize;

  const listStyle = isVertical
    ? {
        rotateY: 0,
        rotateX: 0,
        x: -verticalImageSize * 0.95,
        z: 0,
        y: -620,
      }
    : {
        rotateY: 0,
        rotateX: -4,
        x: 0,
        z: 0,
        y: -400,
      };

  return (
    <>
      <P8 />
      <motion.div
        className='center relative w-full z-0'
        style={{
          height: HEIGHT,
          opacity,
          y,
          x: '0%',
          ...ORIGIN_50,
        }}
      >
        {!isResizing && (
          <motion.ul
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
          </motion.ul>
        )}
      </motion.div>
    </>
  );
};
