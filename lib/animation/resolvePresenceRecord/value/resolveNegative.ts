import {
  TRotatePosStringValue,
  TRotateNegStringValue,
} from '@brysonandrew/animation/config/types/presence/config';
import { TNumberPosPercentValue, TNumberNegPercentValue } from '@brysonandrew/types';

type TStrInput =
  | TNumberPosPercentValue
  | TRotatePosStringValue;
type TNegStrOutput<I extends TStrInput> =
  I extends TNumberPosPercentValue
    ? TNumberNegPercentValue
    : TRotateNegStringValue;

export const resolveNegative = <T extends TStrInput>(
  value: T | number,
): TNegStrOutput<T> | number => {
  if (typeof value === 'number') {
    return -value;
  }
  if (typeof value === 'string') {
    if (value.startsWith('-'))
      return value as TNegStrOutput<typeof value>;
    return `-${value}` as TNegStrOutput<typeof value>;
  }

  return value;
};
