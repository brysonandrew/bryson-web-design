


import { useScroll } from 'framer-motion';
import { useState } from 'react';
import { useEventListener } from '@hooks/useEventListener';
import { CURSOR_SIZE_HALF, CURSOR_SIZE, TSharedConfig } from './config';

type TConfig = TSharedConfig;
export const useCursor = ({
  cursorX,
  cursorY,
  element,
  image,
}: TConfig) => {
  const [isCursorReady, setCursorReady] = useState(false);
  const rect = element.getBoundingClientRect();
  const imageRect =
    image.getBoundingClientRect();

  const imageX = imageRect.x;
  const imageY = imageRect.y;
  const imageWidth = imageRect.width;
  const imageHeight = imageRect.height;

  const resolveViewportOffset = (key: "left" | "top") => imageRect[key] - rect[key] - CURSOR_SIZE_HALF;
  const viewportOffsetX = resolveViewportOffset("left");
  const viewportOffsetY = resolveViewportOffset("top");

  const { scrollX, scrollY } = useScroll();

  const handleMove = (event: PointerEvent) => {
    const cx = event.pageX - scrollX.get() - imageX;
    const cy = event.pageY - scrollY.get() - imageY;

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

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  return {
    isCursorReady,
    style: {
      top: viewportOffsetY,
      left: viewportOffsetX,
      x: cursorX,
      y: cursorY,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    }
  };
};
