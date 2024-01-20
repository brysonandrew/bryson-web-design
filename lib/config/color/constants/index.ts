import { resolveGlowRecord } from '../utils/glow/resolveGlowRecord';
import { GRAYSCALE_COLOR_VARIABLES } from './grayscale';
import { BLACK_RGBS } from './grayscale/black';
import { WHITE_RGBS } from './grayscale/white';
import { MAIN_OPACITY_VARIATIONS, MAIN_RGBS } from './main';

export const BASE_COLOR_RECORD = {
  ...GRAYSCALE_COLOR_VARIABLES,
  ...MAIN_OPACITY_VARIATIONS,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

const BASE_RGB = {
  ...MAIN_RGBS,
  black: BLACK_RGBS[0],
  'white-9': WHITE_RGBS[9],
} as const;

export const BASE_GLOW_RECORD =
  resolveGlowRecord<typeof BASE_RGB>(BASE_RGB);
