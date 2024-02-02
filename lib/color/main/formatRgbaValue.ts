import {
  TDigit,
  TRgba,
  TRgbaValue,
} from '@brysonandrew/color-main/config/types';

export const formatRgbaValue = <O extends TDigit>(
  rgba: TRgba<O>,
) => `rgba(${rgba})` as TRgbaValue<O>;
