import clsx from 'clsx';
import styled from '@emotion/styled';
import {
  MotionValue,
  clamp,
  motion,
  useMotionValue,
} from 'framer-motion';
import { useState, type FC } from 'react';
import { useCursor } from './useCursor';
import { useScale } from './useScale';
import {
  CURSOR_SIZE_QUARTER,
  TImageProps,
  TMoveConfig,
  TSharedConfig,
} from './config';
import { Picture } from '@components/picture';
import { useTapEvents } from './useTapEvents';
import { TMediaRecord } from '@t/media';
import { Tag } from './Tag';
import { useContext } from '@state/Context';

const MOVE_BUFFER = CURSOR_SIZE_QUARTER;

export const Root = styled(motion.div)``;
export const Border = styled(motion.div)``;

type TProps = TImageProps & {
  index: number;
  count: number;
  scrollX: MotionValue;
  scrollY: MotionValue;
  mediaRecord: TMediaRecord;
  viewportWidth: number;
  container: HTMLElement;
};
export const Zoom: FC<TProps> = ({
  index,
  count,
  scrollX,
  scrollY,
  mediaRecord,
  viewportWidth,
  container,
  image,
}) => {
  const [isCursorReady, setCursorReady] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const imageRect = image.getBoundingClientRect();

  const imageWidth = imageRect.width;
  const imageHeight = imageRect.height;

  const imageX = imageRect.x;
  const imageY = imageRect.y;

  const rect = container.getBoundingClientRect();

  const handleMove = ({ cx, cy }: TMoveConfig) => {
    if (
      cx > -MOVE_BUFFER &&
      cy > -MOVE_BUFFER &&
      cx < imageWidth + MOVE_BUFFER &&
      cy < imageHeight + MOVE_BUFFER
    ) {
      cx = clamp(0, imageWidth, cx);
      cy = clamp(0, imageHeight, cy);

      cursorX.set(cx);
      cursorY.set(cy);
      setCursorReady(true);
    } else {
      setCursorReady(false);
    }
  };

  const sharedConfig: TSharedConfig = {
    index,
    count,
    image,
    imageRect,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
    container,
    rect,
    viewportWidth,
    cursorX,
    cursorY,
    scrollX,
    scrollY,
    onMove: handleMove,
    onClose: () => setCursorReady(false),
  };
  const rootProps = useCursor(sharedConfig);
  const { scale, onJumpScale, onTuneScale, ...copyProps } =
    useScale(sharedConfig);

  useTapEvents({
    onJumpScale,
    onTuneScale,
    ...sharedConfig,
  });

  return (
    <>
      {isCursorReady && (
        <>
          <Border
            className={clsx(
              'absolute glow-interactive pointer-events-none z-10',
            )}
            {...rootProps}
          >
            <Tag>{`${~~scale}`}</Tag>
          </Border>
          <Root
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
          >
            <Picture
              width={imageWidth}
              height={imageHeight}
              mediaRecord={mediaRecord}
              className='absolute'
              {...copyProps}
            />
          </Root>
        </>
      )}
    </>
  );
};
