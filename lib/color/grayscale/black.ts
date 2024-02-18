import { resolveRgbaOpacityRange } from '@brysonandrew/color-base/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color-base/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color-grayscale/resolveGrayscaleRange';
import { resolveGrayscaleRgb } from '@brysonandrew/color-grayscale/resolveGrayscaleRgb';

export const BLACKEST = 0;
export const BLACK_RGBS = resolveGrayscaleRange(BLACKEST, 85);
const BLACKEST_RGB = resolveGrayscaleRgb(BLACKEST);
export const BLACK_DEFAULT_RGB = BLACKEST_RGB;

export const BLACK = {
  ...resolveRgbValueSeriesRecord('black', BLACK_RGBS),
  ...resolveRgbaOpacityRange('black', BLACK_DEFAULT_RGB),
} as const;
