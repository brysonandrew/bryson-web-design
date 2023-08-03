import { THoverKey } from '@hooks/useHoverKey';
import { HOVER_KEY_DELIMITER } from '@utils/keys';

export const SELECT_LAYOUT_ID = 'SELECT_LAYOUT_ID';

export const CURSOR_KEYS = [
  'big',
  'none',
  'open-in-new',
  'gallery',
] as const;
export type TCursorKey =
  | (typeof CURSOR_KEYS)[number]
  | null;

export const resolveCursorKeyFromHoverKey = (
  hoverKey: THoverKey,
) => {
  if (hoverKey === null) return null;
  const cursorKey = hoverKey.split(HOVER_KEY_DELIMITER)[0];
  return cursorKey as TCursorKey;
};
