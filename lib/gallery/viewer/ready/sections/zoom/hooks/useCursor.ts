import { useEventListener } from '@brysonandrew/hooks-events/event-listener';
import {
  CURSOR_SIZE_HALF,
  CURSOR_SIZE,
  TSharedConfig,
  TInteractiveEvent,
  resolveCursorCoords,
} from '@brysonandrew/gallery-viewer';
import { useOutsideClick } from '@brysonandrew/hooks-dom/useOutsideClick';
import { resolveGalleryWidth } from '@brysonandrew/gallery-viewer/utils/resolveGalleryWidth';

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

  const galleryHalfPaddingX =
    (viewportWidth - resolveGalleryWidth(viewportWidth)) *
    0.5;

  return {
    style: {
      top: imageRect.top - rect.top - CURSOR_SIZE_HALF,
      left:
        index * viewportWidth +
        rect.left +
        imageRect.left -
        galleryHalfPaddingX -
        CURSOR_SIZE_HALF,
      x: cursorX,
      y: cursorY,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
    },
  };
};
