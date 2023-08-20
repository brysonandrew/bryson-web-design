import { useEventListener } from '@hooks/events/useEventListener';
import {
  CURSOR_SIZE_HALF,
  CURSOR_SIZE,
  TSharedConfig,
  TInteractiveEvent,
  resolveCursorCoords,
} from './config';
import { useOutsideClick } from '@hooks/dom/useOutsideClick';

type TConfig = TSharedConfig;
export const useCursor = ({
  index,
  cursorX,
  cursorY,
  rect,
  viewportWidth,
  image,
  imageX,
  imageY,
  scroll,
  imageRect,
  onMove,
  onClose,
}: TConfig) => {
  const imageRef = { current: image };
  const handleMove = (event: TInteractiveEvent) => {
    const { cx, cy } = resolveCursorCoords(event, {
      imageX,
      imageY,
      scroll,
    });
    onMove({ cx, cy });
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  useOutsideClick({ ref: imageRef, handler: onClose });

  return {
    style: {
      top: imageRect.top - rect.top - CURSOR_SIZE_HALF,
      left:
        index * viewportWidth +
        rect.left -
        CURSOR_SIZE_HALF,
      x: cursorX,
      y: cursorY,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    },
  };
};
