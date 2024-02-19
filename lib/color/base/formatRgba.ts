import {
  TRgb,
  TRgba,
  TRgbaDelimiter,
} from '@brysonandrew/color-base/config/types';
import { TDigit } from '@brysonandrew/config-types/numbers/series';

export const formatRgba = <O extends TDigit>(
  rgb: TRgb,
  opacity: O,
) =>
  `${rgb}${', ' as TRgbaDelimiter}0.${opacity}` as TRgba<O>;
