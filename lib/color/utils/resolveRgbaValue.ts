import {
  TDigit,
  TRgb,
  TRgbaValue,
  TRgbValue,
} from '@brysonandrew/color/config/types';
import { formatRgbValue } from './formatRgb';
import { formatRgba } from './formatRgba';
import { formatRgbaValue } from './formatRgbaValue';

export const resolveRgbaValue = <
  N extends TDigit | undefined,
>(
  rgb: TRgb,
  opacityIndex?: N,
) => {
  if (typeof opacityIndex === 'undefined') {
    return formatRgbValue(rgb) as TRgbValue;
  }
  const rgba = formatRgba(rgb, opacityIndex);
  const rgbaValue = formatRgbaValue(rgba);
  return rgbaValue as TRgbaValue;
};
