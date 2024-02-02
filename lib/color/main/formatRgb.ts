import {
  TRgb,
  TRgbValue,
} from '@brysonandrew/color-main/config/types';

export const formatRgbValue = (rgb: TRgb) =>
  `rgb(${rgb})` as TRgbValue;
