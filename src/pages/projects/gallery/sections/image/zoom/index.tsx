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
import { Cross } from '@components/icons/Cross';
import { Picture } from '@components/picture';
import { useTapEvents } from './useTapEvents';
import { TMediaRecord } from '@t/media';

const MOVE_BUFFER = CURSOR_SIZE_QUARTER;

export const Root = styled(motion.div)``;
export const Border = styled(motion.div)``;
export const Tag = styled.code``;

type TProps = TImageProps & {
  scrollX: MotionValue;
  scrollY: MotionValue;
  mediaRecord: TMediaRecord;
  container: HTMLDivElement;
};
export const Zoom: FC<TProps> = ({
  scrollX,
  scrollY,
  mediaRecord,
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
    image,
    imageRect,
    imageX,
    imageY,
    imageWidth,
    imageHeight,
    container,
    rect,
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
              'absolute glow-interactive pointer-events-none',
            )}
            {...rootProps}
          >
            <div
              className={clsx(
                'absolute left-full top-full flex items-center px-2 py-0.5 m-2 text-teal-bright opacity-50',
              )}
            >
              <Cross
                classValue='w-2.5 h-2.5 mt-0.5'
                stroke='gray'
                strokeWidth={2}
              />
              <div className='p-0.5' />
              <Tag className='relative text-xs text-gray-stroke whitespace-nowrap'>{`${~~scale}`}</Tag>
            </div>
          </Border>
          <Root
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
          >
            <Picture
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
