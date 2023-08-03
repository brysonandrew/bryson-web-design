export const CURSOR_CLASS =
  "flex items-center justify-center absolute";
export const CONTENT_CLASS =
  "absolute left-full top-1/2 translate-x-4 -translate-y-1/2 whitespace-nowrap";
export const SELECT_LAYOUT_ID = "SELECT_LAYOUT_ID";
export const CURSOR_SIZE = 12;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;

export const TRAIL_SIZE = 11;
export const STRIDE = 4;
export const COUNT = TRAIL_SIZE * STRIDE;

export type TMouse = {
  isMoving: boolean;
  timeout: ReturnType<typeof setTimeout> | null;
  stride: number;
}; 