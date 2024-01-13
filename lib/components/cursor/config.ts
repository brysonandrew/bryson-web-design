import { resolveCursorKeyFromHoverKey } from '@lib/components/cursor/switch/config';
import { THoverKey } from '@lib/components/cursor/hooks/config';
import { HOVER_KEY_DELIMITER } from '@lib/utils/keys';

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
