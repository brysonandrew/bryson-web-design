import { THoverKey } from '@lib/components/cursor/hooks/config';
import { HOVER_KEY_DELIMITER } from '@lib/utils/keys';

export const CURSOR_LAYOUT_ID = 'CURSOR_LAYOUT_ID';

export const OPEN_IN_NEW_CURSOR_KEY = 'open-in-new';
export const GALLERY_CURSOR_KEY = 'gallery';
export const PROJECT_CURSOR_KEY = 'project';
export const SERVICE_CURSOR_KEY = 'service';
export const FOCUS_CURSOR_KEY = 'focus';
export const DARK_MODE_CURSOR_KEY = 'dark-mode';
export const SOUND_CURSOR_KEY = 'sound';
export const PACKAGE_CURSOR_KEY = 'package';

export const TIP_CURSOR_KEYS = [
  OPEN_IN_NEW_CURSOR_KEY,
  GALLERY_CURSOR_KEY,
  PROJECT_CURSOR_KEY,
  DARK_MODE_CURSOR_KEY,
  SOUND_CURSOR_KEY,
  SERVICE_CURSOR_KEY,
  FOCUS_CURSOR_KEY,
  PACKAGE_CURSOR_KEY,
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
