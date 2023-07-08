import styled from '@emotion/styled';
import type { TMediaRecord } from '@pages/projects/config';
import {
  AnimatePresence,
  MotionValue,
  clamp,
  motion,
  useMotionValue,
} from 'framer-motion';
import { useState, type FC } from 'react';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useCursor } from './useCursor';
import { useScale } from './useScale';
import {
  CURSOR_SIZE_HALF,
  TImageProps,
  TMoveConfig,
  TSharedConfig,
} from './config';
import clsx from 'clsx';
import { GLOW_BOX_SHADOW } from '@constants/colors';
import { Cross } from '@components/icons/Cross';
import { Picture } from '@components/picture';
import { useTapEvents } from './useTapEvents';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import { useImageDimensions } from '@hooks/media/useImageDimensions';

const MOVE_BUFFER = CURSOR_SIZE_HALF;

export const Root = styled(motion.div)``;
export const Border = styled(motion.div)``;
export const Tag = styled.code`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: gray;
`;

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
    <AnimatePresence>
      {isCursorReady && (
        <>
          <Border
            key='ZOOM_BORDER'
            className={clsx(
              'absolute pointer-events-none glow-interactive',
            )}
            {...rootProps}
            {...PRESENCE_OPACITY}
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
              <Tag className='relative text-xs whitespace-nowrap'>{`${~~scale}`}</Tag>
            </div>
          </Border>
          <Root
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
          >
            <Picture
              mediaRecord={mediaRecord}
              className='absolute w-full h-full'
              {...copyProps}
            />
          </Root>
        </>
      )}
    </AnimatePresence>
  );
};
