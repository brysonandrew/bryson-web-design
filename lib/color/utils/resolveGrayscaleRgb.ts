import {
  TRgbaDelimiter,
  TRgbGrayscale,
} from '@brysonandrew/color/config/types';

export const resolveGrayscaleRgb = <N extends number>(
  n: number,
): TRgbGrayscale<N> =>
  [n, n, n].join(
    ', ' as TRgbaDelimiter,
  ) as TRgbGrayscale<N>;
