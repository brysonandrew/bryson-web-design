import { resolveRgbaOpacityRange } from '@brysonandrew/color/utils/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color/utils/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color/utils/resolveGrayscaleRange';
import { resolveGrayscaleRgb } from '@brysonandrew/color/utils/resolveGrayscaleRgb';

const WHITEST = 255;
export const WHITE_RGBS = resolveGrayscaleRange(
  170,
  WHITEST,
);
const WHITEST_RGB = resolveGrayscaleRgb(WHITEST);

export const WHITE = {
  ...resolveRgbaOpacityRange('white', WHITEST_RGB),
  ...resolveRgbValueSeriesRecord('white', WHITE_RGBS),
} as const;
