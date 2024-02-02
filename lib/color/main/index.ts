import { rgbToOpacityRangeRecord } from '@brysonandrew/color-main/rgbToOpacityRangeRecord';

export const MAIN_RGBS = {
  secondary: '45, 212, 191',
  highlight: '207, 250, 254',
  accent: '153, 204, 255',
} as const;

export const MAIN_OPACITY_VARIATIONS =
  rgbToOpacityRangeRecord<typeof MAIN_RGBS>(MAIN_RGBS);

export * from './formatRgb';
export * from './formatRgba';
export * from './formatRgbaValue';
export * from './resolveColorRecords';
export * from './resolveRgbSeriesRecord';
export * from './resolveRgbValueSeriesRecord';
export * from './resolveRgba';
export * from './resolveRgbaOpacityRange';
export * from './resolveRgbaValue';
export * from './resolveVarCss';
export * from './resolveVarCssColorRecord';
export * from './rgbToOpacityRangeRecord';
export * from './rgbToVarRecord';
export * from './config/constants';
export * from './config/types';