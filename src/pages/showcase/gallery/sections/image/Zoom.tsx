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
import { FOOTER_SIZE } from '../constants';

const SCALE = 2;
export const CURSOR_SIZE = 120;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;
const CURSOR_OFFSET_Y = -CURSOR_SIZE_HALF;
const CURSOR_OFFSET_X = 0;

const MULTIPLIER = SCALE * 2;

export const Root = styled(motion.div)``;

type TProps = {
  media: TMedia;
  image: HTMLImageElement;
};
export const Zoom: FC<TProps> = ({ media, image }) => {
  const [isCursorReady, setCursorReady] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rect = image.getBoundingClientRect();

  const baseOffset = (v: number) => -(v * MULTIPLIER);
  const offsetX = useTransform(
    cursorX,
    (v: number) =>
      baseOffset(v) + rect.x + CURSOR_OFFSET_X * MULTIPLIER,
  );
  const offsetY = useTransform(
    cursorY,
    (v: number) =>
      baseOffset(v) + rect.y + CURSOR_OFFSET_Y * MULTIPLIER,
  );

  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: PointerEvent) => {
    const nextX = event.pageX - scrollX.get() - rect.x;
    const nextY = event.pageY - scrollY.get() - rect.y;
    if (
      nextX > 0 &&
      nextY > 0 &&
      nextX < rect.width &&
      nextY < rect.height
    ) {
      setCursorReady(true);
      const cx = nextX + CURSOR_OFFSET_X;
      const cy = nextY + CURSOR_OFFSET_Y + FOOTER_SIZE;
      cursorX.set(cx);
      cursorY.set(cy);
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
        className='absolute left-0 top-0 shadow-teal-bright-04-sm pointer-events-none overflow-hidden'
        style={{
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
            width: rect.width * SCALE,
            height: rect.height * SCALE,
            scale: SCALE,
          }}
          alt={media.key}
        />
      </Root>
    );
  }
  return null;
};
