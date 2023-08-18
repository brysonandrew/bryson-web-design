import { THoverKey } from '@hooks/cursor/config';
import { HOVER_KEY_DELIMITER } from '@utils/keys';

export const SELECT_LAYOUT_ID = 'SELECT_LAYOUT_ID';
export const CURSOR_LAYOUT_ID = 'CURSOR_LAYOUT_ID';

export const PROJECT_CURSOR_KEY = 'project';
export const OPEN_IN_NEW_CURSOR_KEY = 'open-in-new';

export const TIP_CURSOR_KEYS = [
  OPEN_IN_NEW_CURSOR_KEY,
  'gallery',
  PROJECT_CURSOR_KEY,
  'dark-mode',
  'sound',
] as const;
export type TTipCursorKey =
  (typeof TIP_CURSOR_KEYS)[number];

export const CURSOR_KEYS = [
  'big',
  'bigger',
  'none',
  ...TIP_CURSOR_KEYS,
] as const;
export type TCursorKey =
  | (typeof CURSOR_KEYS)[number]
  | null;

export const resolveCursorKeyFromHoverKey = (
  hoverKey: THoverKey,
  index?: number,
) => {
  if (hoverKey === null) return null;
  const cursorKey = hoverKey.split(HOVER_KEY_DELIMITER)[
    index ?? 0
  ];
  return cursorKey as typeof index extends undefined
    ? TCursorKey
    : string;
};
