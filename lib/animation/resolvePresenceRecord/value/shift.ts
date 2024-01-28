import {
  TShift,
  TShiftDirection,
  TShiftValue,
  TXyAxis,
} from '@brysonandrew/animation/config/types/presence/config';
import { SHIFT_DIRECTIONS } from '@brysonandrew/animation/config/constants';
import { TNumberPercentValue } from '@brysonandrew/animation/config/types/values';
import { resolveNegative } from '@brysonandrew/animation/resolvePresenceRecord/value/resolveNegative';

export const isValidShift = (
  shift?: TShift,
): shift is TShift => {
  const errorMessage = "Invalid 'shift' animation value.";

  if (Array.isArray(shift)) {
    const [value, direction] = shift;
    const isValidDirection =
      typeof direction === 'undefined' ||
      SHIFT_DIRECTIONS.includes(direction);

    if (!isValidDirection) {
      console.error(`${errorMessage} Direction invalid`);
    }
    const isValidValue =
      typeof value !== 'undefined' &&
      (typeof value === 'number' ||
        (typeof value === 'string' &&
          value.endsWith('%') &&
          !value.startsWith('-')));

    if (!isValidValue) {
      console.error(`${errorMessage} Value invalid`);
    }
    return isValidDirection && isValidValue;
  }
  console.error(`${errorMessage} Not an array`);
  return false;
};

const resolveAxis = (
  direction?: TShiftDirection,
): TXyAxis => {
  if (direction === 'left') return 'x';
  if (direction === 'right') return 'x';
  if (direction === 'up') return 'y';
  if (direction === 'down') return 'y';
  return 'y';
};

const resolveValue = (
  value?: TShiftValue,
  direction?: TShiftDirection,
): TNumberPercentValue | number => {
  if (typeof value === 'undefined') return 0;
  if (direction === 'left') return value;
  if (direction === 'right') return resolveNegative(value);
  if (direction === 'up') return value;
  if (direction === 'down') return resolveNegative(value);
  return value;
};

export const resolveShiftKey = resolveAxis;
export const resolveShiftValue = resolveValue;

// export const resolveShiftOrigin = <
//   V extends TShiftValue,
//   T extends TShiftDirection,
// >(
//   inValue: V,
//   direction: T,
//   outValue?: V,
// ) => {
//   const k = resolveAxis(direction);
//   const vi = resolveValue(inValue, direction);
//   const vo = resolveValue(inValue, direction);
//   return { [k]: typeof v === 'number' ? 0 : '0%' };
// };
