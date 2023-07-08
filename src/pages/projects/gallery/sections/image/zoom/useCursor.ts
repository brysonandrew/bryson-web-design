
import { useEventListener } from '@hooks/useEventListener';
import {
  CURSOR_SIZE_HALF,
  CURSOR_SIZE,
  TSharedConfig,
  TInteractiveEvent,
  resolveCursorCoords,
} from './config';
import { useOutsideClick } from '@hooks/useOutsideClick';


type TConfig = TSharedConfig;
export const useCursor = ({
  cursorX,
  cursorY,
  rect,
  image,
  imageX,
  imageY,
  scrollX,
  scrollY,
  imageRect,
  onMove,
  onClose
}: TConfig) => {
  const imageRef = { current: image };
  const resolveViewportOffset = (key: "left" | "top") => imageRect[key] - rect[key] - CURSOR_SIZE_HALF;
  const viewportOffsetX = resolveViewportOffset("left");
  const viewportOffsetY = resolveViewportOffset("top");

  const handleMove = (event: TInteractiveEvent) => {
    const { cx, cy } = resolveCursorCoords(event, { imageX, imageY, scrollX, scrollY });
    onMove({ cx, cy });
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  useOutsideClick({ ref: imageRef, handler: onClose });

  return {
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
