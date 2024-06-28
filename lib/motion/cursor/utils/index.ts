import {
  HOVER_KEY_DELIMITER,
  resolveCursorKeyFromHoverKey,
  THover,
} from '@brysonandrew/motion-cursor/base';

export const resolveHoverKeyParts = (hover: THover) => {
  const { hoverKey } = hover;
  if (!hoverKey) return [];
  const parts = hoverKey.split(HOVER_KEY_DELIMITER);
  return parts;
};

export const resolveHoverKeyVariations = (
  hover: THover,
  index?: number
) => {
  const { hoverKey, children } = hover;
  return {
    hoverKey,
    children,
    hoverKeyParts: resolveHoverKeyParts(hover),
    cursorKey: resolveCursorKeyFromHoverKey(
      hoverKey,
      index
    ),
  };
};
