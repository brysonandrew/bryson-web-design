import {
  TShift,
  TShiftDirection,
  TShiftValue,
  TXyAxis,
} from '@brysonandrew/motion-core';
import { SHIFT_DIRECTIONS } from '@brysonandrew/motion-core';
import { resolveNegative } from '@brysonandrew/motion-core';
import { TNumberPercentValue } from '@brysonandrew/config-types';

export const isValidShift = (
  shift?: TShift,
): shift is TShift => {
  if (typeof shift === 'undefined') return false;

  const errorMessage = (v: string) =>
    `Invalid 'shift' animation value, ${v} invalid.`;

  if (Array.isArray(shift)) {
    const [value, direction] = shift;
    const isValidDirection =
      typeof direction === 'undefined' ||
      SHIFT_DIRECTIONS.includes(direction);

    if (!isValidDirection) {
      console.error(
        errorMessage('direction'),
        direction,
        shift,
      );
    }
    const isValidValue =
      typeof value !== 'undefined' &&
      (typeof value === 'number' ||
        (typeof value === 'string' && value.endsWith('%')));

    if (!isValidValue) {
      console.error(errorMessage('value'), value, shift);
    }
    return isValidDirection && isValidValue;
  }
  console.error(errorMessage('init'), shift);

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
