import { MotionValue } from "framer-motion";

export const SCALE = {
  INIT: 2,
  MIN: 1,
  MAX: 20,
  TUNE_EVENT: "wheel",
  JUMP_EVENT: "click",
} as const;
export const LOCAL_HOST_SCALE_KEY = "LOCAL_HOST_SCALE_KEY";
export const WHEEL_DELTA_THRESHOLD = 0.2;
export const DELTA_FACTOR = 0.001;

export const CURSOR_SIZE = 275;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;

export type TImageProps = {
  image: HTMLImageElement;
};

export type TSharedConfig = TImageProps & {
  element: HTMLDivElement;
  cursorX: MotionValue;
  cursorY: MotionValue;
};
