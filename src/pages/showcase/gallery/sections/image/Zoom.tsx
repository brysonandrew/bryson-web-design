import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useState, type FC } from 'react';
import { useEventListener } from '@hooks/useEventListener';

const SCALE = 2;
export const CURSOR_SIZE = 120;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;

export const Root = styled(motion.div)``;

type TProps = {
  media: TMedia;
  element: HTMLDivElement;
  image: HTMLImageElement;
};
export const Zoom: FC<TProps> = ({
  media,
  element,
  image,
}) => {
  const [isCursorReady, setCursorReady] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rect = element.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();
  const diffX = imageRect.left - rect.left;
  const diffY = imageRect.top - rect.top;

  const offsetX = useTransform(
    cursorX,
    (v: number) => (-CURSOR_SIZE_HALF-v * SCALE) ,
  );
  const offsetY = useTransform(
    cursorY,
    (v: number) => (-CURSOR_SIZE_HALF-v * SCALE),
  );
  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: PointerEvent) => {
    const nextX = event.pageX - scrollX.get() - imageRect.x;
    const nextY = event.pageY - scrollY.get() - imageRect.y;

    if (
      nextX > 0 &&
      nextY > 0 &&
      nextX < imageRect.width &&
      nextY < imageRect.height
    ) {
      const cx = nextX - CURSOR_SIZE_HALF;
      const cy = nextY - CURSOR_SIZE_HALF;
      cursorX.set(cx);
      cursorY.set(cy);
      setCursorReady(true);
    } else {
      setCursorReady(false);
    }
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  if (isCursorReady) {
    return (
      <Root
        className='absolute shadow-teal-bright-04-sm pointer-events-none overflow-hidden'
        style={{
          top: diffY,
          left: diffX,
          x: cursorX,
          y: cursorY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
        }}
      >
        <motion.img
          src={media.src}
          className='absolute left-0 top-0'
          style={{
            x: offsetX,
            y: offsetY,
            width: imageRect.width * SCALE,
            height: imageRect.height * SCALE,
          }}
          alt={media.key}
        />
      </Root>
    );
  }
  return null;
};
