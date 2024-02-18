import { rgbToOpacityRangeRecord } from '@brysonandrew/color-base/rgbToOpacityRangeRecord';
import {
  WHITE,
  WHITE_RGBS,
  GRAY,
  GRAY_RGBS,
  BLACK,
  BLACK_RGBS,
  WHITE_DEFAULT_RGB,
  BLACK_DEFAULT_RGB,
} from '@brysonandrew/color-grayscale';

export const BASE_RGBS_RECORD = {
  dark: BLACK_DEFAULT_RGB,
  light: WHITE_DEFAULT_RGB,
  primary: GRAY_RGBS[0], // '45, 212, 191',
  secondary: GRAY_RGBS[4], // '207, 250, 254',
  accent: GRAY_RGBS[9], //'153, 204, 255',
} as const;

export const BASE_OPACITY_VARIATIONS =
  rgbToOpacityRangeRecord<typeof BASE_RGBS_RECORD>(
    BASE_RGBS_RECORD,
  );

export const BASE_COLOR_RECORD = {
  ...BLACK,
  ...GRAY,
  ...WHITE,
  ...BASE_OPACITY_VARIATIONS,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

export const BASE_RGB = {
  ...BASE_RGBS_RECORD,
  black: BLACK_RGBS[0],
  white: WHITE_RGBS[9],
} as const;

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
