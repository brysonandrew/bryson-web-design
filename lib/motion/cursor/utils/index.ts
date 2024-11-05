import {
  HOVER_KEY_DELIMITER,
  resolveCursorKeyFromHover,
  THover,
} from '@brysonandrew/motion-cursor/base';

export const resolveHoverParts = (hover: THover) => {
  const { hoverKey } = hover;
  if (!hoverKey) return [];
  const parts = hoverKey.split(HOVER_KEY_DELIMITER);
  return parts;
};

export const resolveHoverVariations = (
  hover: THover,
  index?: number
) => {
  const { hoverKey, children } = hover;
  return {
    hoverKey,
    children,
    hoverParts: resolveHoverParts(hover),
    cursorKey: resolveCursorKeyFromHover(hoverKey, index),
  };
};
