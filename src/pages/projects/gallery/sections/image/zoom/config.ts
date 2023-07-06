import { MotionValue } from "framer-motion";

export const SCALE = {
  INIT: 2,
  MIN: 1,
  MAX: 20,
} as const;
export const LOCAL_HOST_SCALE_KEY = "LOCAL_HOST_SCALE_KEY";
export const WHEEL_DELTA_THRESHOLD = 0.2;
export const DELTA_FACTOR = 0.001;

export const CURSOR_SIZE = 275;
export const CURSOR_SIZE_HALF = CURSOR_SIZE * 0.5;

export type TImageProps = {
  image: HTMLImageElement;
};

export type TMoveConfig = { cx: number, cy: number; };
export type TSharedConfig = TImageProps & {
  imageRect: DOMRect;
  imageX: number;
  imageY: number;
  imageWidth: number;
  imageHeight: number;
  element: HTMLDivElement;
  rect: DOMRect;
  cursorX: MotionValue;
  cursorY: MotionValue;
  scrollX: MotionValue;
  scrollY: MotionValue;
  onMove(onMoveConfig: TMoveConfig): void;
  onClose(): void;
};
export const resolveCoord = (event: MouseEvent | TouchEvent, key: "pageX" | "pageY", touchIndex = 0) => (event as MouseEvent)[key] ?? (event as TouchEvent).touches[touchIndex][key];
export type TInteractiveEvent = PointerEvent | MouseEvent | TouchEvent;
export type TCursorCoordsConfig = Pick<TSharedConfig, "imageX" | "imageY" | "scrollX" | "scrollY"> & { touchIndex?: number; };
export const resolveCursorCoords = (event: TInteractiveEvent, { imageX, imageY, scrollX, scrollY, touchIndex = 0 }: TCursorCoordsConfig) => {
  const pageX = resolveCoord(event, 'pageX');
  const pageY = resolveCoord(event, 'pageY');

  const cx = pageX - scrollX.get() - imageX;
  const cy = pageY - scrollY.get() - imageY;

  return { cx, cy };
};