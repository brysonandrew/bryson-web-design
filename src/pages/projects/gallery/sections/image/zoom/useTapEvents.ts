import { useEventListener } from "@hooks/useEventListener";
import { useRef } from "react";
import { TSharedConfig, resolveCoord, CURSOR_SIZE_HALF, SCALE, resolveCursorCoords } from "./config";

type TConfig = TSharedConfig & {
  onJumpScale(): void;
  onTuneScale(delta: number): void;

};

export const useTapEvents = ({
  imageX,
  imageY,
  image,
  scrollX,
  scrollY,
  cursorX,
  cursorY,
  onMove,
  onJumpScale,
  onTuneScale
}: TConfig) => {
  const imageRef = { current: image };
  const pinchRef = useRef({ isPinch: false, prevDelta: 0 });

  const handleTap = (event: MouseEvent | TouchEvent) => {
    const { cx, cy } = resolveCursorCoords(event, { imageX, imageY, scrollX, scrollY });

    const prevX = cursorX.get();
    const prevY = cursorY.get();

    if (
      Math.abs(prevX - cx) > CURSOR_SIZE_HALF ||
      Math.abs(prevY - cy) > CURSOR_SIZE_HALF
    ) {
      onMove({ cx, cy });
    } else {
      onJumpScale();
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 2) {
      pinchRef.current.isPinch = true;
      event.preventDefault();
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    const { cx: x0, cy: y0 } = resolveCursorCoords(event, { imageX, imageY, scrollX, scrollY });

    if (pinchRef.current.isPinch) {
      const { cx: x1, cy: y1 } = resolveCursorCoords(event, { imageX, imageY, scrollX, scrollY, touchIndex: 1 });

      const distance = Math.hypot(x0 - x1, y0 - y1);
      const delta = distance - pinchRef.current.prevDelta;
      onTuneScale(delta);
      pinchRef.current.prevDelta = distance;
      event.preventDefault();
    } else {
      onMove({ cx: x0, cy: y0 });
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (pinchRef.current.isPinch) {
      pinchRef.current.isPinch = false;
    }
    handleTap(event);
  };

  useEventListener<'click', typeof image>(
    'click',
    handleTap,
    imageRef,
  );

  useEventListener<'touchstart', typeof image>(
    'touchstart',
    handleTouchStart,
    imageRef,
  );

  useEventListener<'touchmove', typeof image>(
    'touchmove',
    handleTouchMove,
    imageRef,
  );

  useEventListener<'touchend', typeof image>(
    'touchend',
    handleTouchEnd,
    imageRef,
  );

};