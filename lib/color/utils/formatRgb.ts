import {
  TRgb,
  TRgbValue,
} from '@brysonandrew/color/config/types';

export const formatRgbValue = (rgb: TRgb) =>
  `rgb(${rgb})` as TRgbValue;
