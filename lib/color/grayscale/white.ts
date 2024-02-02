import { resolveRgbaOpacityRange } from '@brysonandrew/color-main/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color-main/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color-grayscale/resolveGrayscaleRange';
import { resolveGrayscaleRgb } from '@brysonandrew/color-grayscale/resolveGrayscaleRgb';

const WHITEST = 255;
export const WHITE_RGBS = resolveGrayscaleRange(
  170,
  WHITEST,
);
const WHITEST_RGB = resolveGrayscaleRgb(WHITEST);

export const WHITE = {
  ...resolveRgbValueSeriesRecord('white', WHITE_RGBS),
  ...resolveRgbaOpacityRange('white', WHITEST_RGB),
} as const;
