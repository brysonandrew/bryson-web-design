import { THoverKey } from '@hooks/useHoverKey';
import { HOVER_KEY_DELIMITER } from '@utils/keys';

export const SELECT_LAYOUT_ID = 'SELECT_LAYOUT_ID';
export const CURSOR_LAYOUT_ID = 'CURSOR_LAYOUT_ID';

export const PROJECT_CURSOR_KEY = 'project';
export const TAG_CURSOR_KEY = 'tag-open-in-new';

export const CURSOR_KEYS = [
  'gallery-background',
  'big',
  'bigger',
  'none',
  TAG_CURSOR_KEY,
  'open-in-new',
  'gallery',
  PROJECT_CURSOR_KEY,
  'dark-mode',
  'sound',
] as const;
export type TCursorKey =
  | (typeof CURSOR_KEYS)[number]
  | null;

export const resolveCursorKeyFromHoverKey = (
  hoverKey: THoverKey,
  index = 0,
) => {
  if (hoverKey === null) return null;
  const cursorKey = hoverKey.split(HOVER_KEY_DELIMITER)[
    index
  ];
  return cursorKey as TCursorKey | string;
};
