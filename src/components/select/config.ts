export const SELECT_LAYOUT_ID = 'SELECT_LAYOUT_ID';

export const CURSOR_KEYS = ['none', 'open-in-new'] as const;
export type TCursorKey =
  | (typeof CURSOR_KEYS)[number]
  | null;
