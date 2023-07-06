import styled from '@emotion/styled';
import type { TMediaRecord } from '@pages/projects/config';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
} from 'framer-motion';
import { useState, type FC } from 'react';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useCursor } from './useCursor';
import { useScale } from './useScale';
import {
  TImageProps,
  TInteractiveEvent,
  TMoveConfig,
  TSharedConfig,
  resolveCoord,
} from './config';
import clsx from 'clsx';
import { TEAL_GLOW_BOX_SHADOW } from '@constants/colors';
import { Cross } from '@components/icons/Cross';
import { Picture } from '@components/picture';
import { useTapEvents } from './useTapEvents';

export const Root = styled(motion.div)``;
export const Border = styled(motion.div)``;
export const Tag = styled.code`
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: gray;
`;

type TProps = TImageProps & {
  mediaRecord: TMediaRecord;
  element: HTMLDivElement;
};
export const Zoom: FC<TProps> = ({
  mediaRecord,
  element,
  image,
}) => {
  const { scrollX, scrollY } = useScroll();
  const [isCursorReady, setCursorReady] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const imageRect = image.getBoundingClientRect();

  const imageWidth = imageRect.width;
  const imageHeight = imageRect.height;

  const imageX = imageRect.x;
  const imageY = imageRect.y;

  const rect = element.getBoundingClientRect();

  

  const handleMove = ({ cx, cy }: TMoveConfig) => {
    if (
      cx > 0 &&
      cy > 0 &&
      cx < imageWidth &&
      cy < imageHeight
    ) {
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
    element,
    rect,
    cursorX,
    cursorY,
    scrollX,
    scrollY,
    onMove: handleMove,
    onClose: () => setCursorReady(false),
  };
  const { ...rootProps } = useCursor(sharedConfig);
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
              'absolute pointer-events-none',
              TEAL_GLOW_BOX_SHADOW,
            )}
            {...rootProps}
            {...PRESENCE_OPACITY}
          >
            <div
              className={clsx(
                'absolute left-full top-full flex items-center px-2 py-0.5 m-2',
              )}
            >
              <Cross classValue='w-2.5 h-2.5 mt-0.5' />
              <div className='p-0.5' />
              <Tag className='relative text-xs opacity-50 text-teal-bright whitespace-nowrap'>{`${~~scale}`}</Tag>
            </div>
          </Border>
          <Root
            key='ZOOM_CURSOR'
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
            {...PRESENCE_OPACITY}
          >
            <Picture
              mediaRecord={mediaRecord}
              className='absolute'
              {...copyProps}
            />
          </Root>
        </>
      )}
    </AnimatePresence>
  );
};
