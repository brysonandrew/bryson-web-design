import { resolveRgbaOpacityRange } from '@brysonandrew/color/main/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color/main/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color/grayscale/resolveGrayscaleRange';

export const GRAY_RGBS = resolveGrayscaleRange(85, 170);

export const GRAY = {
  ...resolveRgbaOpacityRange('gray', GRAY_RGBS[5]),
  ...resolveRgbValueSeriesRecord('gray', GRAY_RGBS),
} as const;
