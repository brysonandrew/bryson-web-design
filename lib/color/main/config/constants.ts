import {
  WHITE,
  WHITE_RGBS,
  GRAY,
  BLACK,
  BLACK_RGBS,
} from '@brysonandrew/color-grayscale';

import { MAIN_OPACITY_VARIATIONS, MAIN_RGBS } from '..';

export const RGBA_DELIMITER = ', ';

export const BASE_COLOR_RECORD = {
  ...BLACK,
  ...GRAY,
  ...WHITE,
  ...MAIN_OPACITY_VARIATIONS,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

export const BASE_RGB = {
  ...MAIN_RGBS,
  black: BLACK_RGBS[0],
  white: WHITE_RGBS[9],
} as const;
