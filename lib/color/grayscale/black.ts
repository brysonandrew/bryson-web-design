import { resolveRgbaOpacityRange } from '@brysonandrew/color-main/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color-main/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color-grayscale/resolveGrayscaleRange';

export const BLACK_RGBS = resolveGrayscaleRange(0, 85);

export const BLACK = {
  ...resolveRgbValueSeriesRecord('black', BLACK_RGBS),
  ...resolveRgbaOpacityRange('black', BLACK_RGBS[0]),
} as const;
