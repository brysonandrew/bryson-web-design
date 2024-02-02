import {
  TDigit,
  TRgb,
  TRgba,
  TRgbaDelimiter,
} from '@brysonandrew/color-main/config/types';

export const formatRgba = <O extends TDigit>(
  rgb: TRgb,
  opacity: O,
) =>
  `${rgb}${', ' as TRgbaDelimiter}0.${opacity}` as TRgba<O>;
