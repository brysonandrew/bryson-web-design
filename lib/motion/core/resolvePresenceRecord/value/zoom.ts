import { TZoomMotionPropsKey } from '@brysonandrew/motion-config-types';
import {
  TZoom,
  TZoomDirection,
  TZoomValue,
} from '@brysonandrew/motion-config-types';
import { ZOOM_DIRECTIONS } from '@brysonandrew/motion-config-constants';

export const isValidZoom = (
  zoom?: TZoom,
): zoom is TZoom => {
  if (typeof zoom === 'undefined') return false;

  const errorMessage = "Invalid 'zoom' animation value.";

  if (Array.isArray(zoom)) {
    const [value, direction] = zoom;
    const isValidDirection =
      typeof direction === 'undefined' ||
      ZOOM_DIRECTIONS.includes(direction);

    if (!isValidDirection) {
      console.error(`${errorMessage} Direction invalid`);
    }
    const isValidValue =
      typeof value !== 'undefined' &&
      typeof value === 'number';

    if (!isValidValue) {
      console.error(`${errorMessage} Value invalid`);
    }
    return isValidDirection && isValidValue;
  }
  console.error(`${errorMessage} Not an array`, zoom);
  return false;
};

const resolveAxis = (
  direction?: TZoomDirection,
): TZoomMotionPropsKey => {
  if (direction === 'height') return 'scaleY';
  if (direction === 'width') return 'scaleX';
  if (direction === 'depth') return 'scaleX';
  return 'scale';
};

const resolveValue = (value: TZoomValue): number => {
  // if (type === 'expand') return value;
  // if (type === 'shrink') return resolveNegative(value);
  return value;
};

export const resolveZoomKey = resolveAxis;
export const resolveZoomValue = resolveValue;
