import { resolveCursorKeyFromHoverKey } from '@components/base/cursor/switch/config';
import { THoverKey } from '@components/base/cursor/hooks/config';
import { HOVER_KEY_DELIMITER } from '@utils/keys';

export const resolveHoverKeyParts = (
  hoverKey: THoverKey,
) => {
  if (hoverKey === null) return [];
  const parts = hoverKey.split(HOVER_KEY_DELIMITER);
  return parts;
};

export const resolveHoverKeyVariations = (
  hoverKey: THoverKey,
  index?: number,
) => {
  return {
    hoverKey,
    hoverKeyParts: resolveHoverKeyParts(hoverKey),
    cursorKey: resolveCursorKeyFromHoverKey(
      hoverKey,
      index,
    ),
  };
};
