import { useHomeBuild } from '@pages/index/build/context';
import { type FC } from 'react';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { P8 } from '@brysonandrew/space/P8';
import { TITLE_HEIGHT } from '@brysonandrew/space/TitleSpace';
import { useScroll } from '@brysonandrew/motion-scroll';
import { useViewport } from '@brysonandrew/viewport';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { ORIGIN_50 } from '@pages/index/build/constants';
import { motion } from 'framer-motion';
import { useSpin } from '@pages/index/build/carousel/spin';
import { BuildImage } from '@pages/index/build/image';
import { TPositionConfig } from '@pages/index/build/image/circle';

const BUFFER = 440;
const HEIGHT = TITLE_HEIGHT + BUFFER;

type TProps = TPartialParallaxMotionProps;
export const BuildCarousel: FC<TProps> = ({ style }) => {
  const { y, opacity } = style;
  const { records } = useHomeBuild();
  const { isScrolling } = useScroll();
  const spin = useSpin();
  const vp = useViewport();
  if (!vp.isDimensions) return null;

  const {
    isResizing,
    isVertical,
    width: viewportWidth,
    halfWidth: halfViewportWidth,
  } = vp;

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
        y: -560,
      }
    : {
        rotateY: 0,
        rotateX: -4,
        x: 0,
        z: 0,
        y: -360,
      };

  return (
    <>
      <P8 />
      <motion.div
        className="center relative w-full z-0"
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
            className="h-0 w-0 preserve-3d will-change-transform"
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
                { length: count }: TMediaRecord[]
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
                  <BuildImage
                    key={record.src}
                    isScrolling={isScrolling}
                    index={index}
                    count={count}
                    mediaRecord={record}
                    positionConfig={positionConfig}
                  />
                );
              }
            )}
          </motion.ul>
        )}
      </motion.div>
    </>
  );
};
