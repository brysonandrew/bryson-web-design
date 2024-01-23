import { resolveRgbaOpacityRange } from '@brysonandrew/color/utils/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color/utils/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color/utils/resolveGrayscaleRange';

export const GRAY_RGBS = resolveGrayscaleRange(85, 170);

export const GRAY = {
  ...resolveRgbValueSeriesRecord('gray', GRAY_RGBS),
  ...resolveRgbaOpacityRange('gray', GRAY_RGBS[5]),
} as const;
