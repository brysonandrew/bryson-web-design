import { resolveRgbaOpacityRange } from '@brysonandrew/color-base/resolveRgbaOpacityRange';
import { resolveRgbValueSeriesRecord } from '@brysonandrew/color-base/resolveRgbValueSeriesRecord';
import { resolveGrayscaleRange } from '@brysonandrew/color-grayscale/resolveGrayscaleRange';
import { resolveGrayscaleRgb } from '@brysonandrew/color-grayscale/resolveGrayscaleRgb';

const MIN_GRAY = 85;
const MAX_GRAY = 170;
const MID_GRAY = MAX_GRAY - MIN_GRAY;
export const GRAY_RGBS = resolveGrayscaleRange(85, 170);
const MID_GRAY_RGB = resolveGrayscaleRgb(MID_GRAY);
export const GRAY_DEFAULT_RGB = MID_GRAY_RGB;

export const GRAY = {
  ...resolveRgbaOpacityRange('gray', GRAY_DEFAULT_RGB),
  ...resolveRgbValueSeriesRecord('gray', GRAY_RGBS),
} as const;
