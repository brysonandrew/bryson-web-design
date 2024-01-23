import {
  TDigit,
  TRgba,
  TRgbaValue,
} from '@brysonandrew/color/config/types';

export const formatRgbaValue = <O extends TDigit>(
  rgba: TRgba<O>,
) => `rgba(${rgba})` as TRgbaValue<O>;
