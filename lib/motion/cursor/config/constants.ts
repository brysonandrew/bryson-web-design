import { NOOP } from '@brysonandrew/utils-function';

export const GLOBAL_KEY = 'GLOBAL_KEY';

export const EMPTY_HANDLERS = {
  onHoverStart: NOOP,
  onHoverEnd: NOOP,
  onPointerLeave: NOOP,
  onMouseLeave: NOOP,
};

export type THoverDelimiter = typeof HOVER_KEY_DELIMITER;

export type THoverKey =
  | `${TCursorKey}${THoverDelimiter}${string}${THoverDelimiter}${string}`
  | null;

export const HOVER_KEY_DELIMITER = '=[hover]>';

export const CURSOR_LAYOUT_ID = 'CURSOR_LAYOUT_ID';

export const CUSTOM_CURSOR_KEY = 'custom';
export const BIG_CURSOR_KEY = 'big';
export const BIGGER_CURSOR_KEY = 'bigger';
export const NONE_CURSOR_KEY = 'none';

export const CURSOR_KEYS = [
  CUSTOM_CURSOR_KEY,
  BIG_CURSOR_KEY,
  BIGGER_CURSOR_KEY,
  NONE_CURSOR_KEY,
] as const;
export type TCursorKey =
  | (typeof CURSOR_KEYS)[number]
  | null;

export const resolveCursorKeyFromHover = (
  hover: THoverKey,
  index?: number,
) => {
  if (hover === null) return null;
  const cursorKey = hover.split(HOVER_KEY_DELIMITER)[
    index ?? 0
  ];
  return cursorKey as typeof index extends undefined
    ? TCursorKey
    : string;
};
