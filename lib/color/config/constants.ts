import { resolveGlowRecord } from '@brysonandrew/color/utils/glow/resolveGlowRecord';
import { WHITE, WHITE_RGBS } from '../grayscale/white';
import { GRAY } from '../grayscale/gray';
import { BLACK, BLACK_RGBS } from '../grayscale/black';

import { MAIN_OPACITY_VARIATIONS, MAIN_RGBS } from '../main';

export const RGBA_DELIMITER = ', ';

export const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const INDICIES = [0, ...DIGITS] as const;

export const BASE_COLOR_RECORD = {
  ...BLACK,
  ...GRAY,
  ...WHITE,
  ...MAIN_OPACITY_VARIATIONS,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

const BASE_RGB = {
  ...MAIN_RGBS,
  black: BLACK_RGBS[0],
  white: WHITE_RGBS[9],
} as const;

export const BASE_GLOW_RECORD =
  resolveGlowRecord<typeof BASE_RGB>(BASE_RGB);
