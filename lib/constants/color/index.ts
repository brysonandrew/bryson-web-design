import {
  GRAYSCALE_COLOR_VARIABLES,
  GRAYSCALE_RGB_RECORD,
} from './grayscale';
import { resolveColorRecord } from '@lib/utils/color/resolveColorRecord';

export const BASE_RGB_RECORD = {
  ...GRAYSCALE_RGB_RECORD,
} as const;
export const BASE_OPACITY_RANGE_RGB_RECORD = {} as const;

export const BASE_COLOR_RECORD = {
  ...GRAYSCALE_COLOR_VARIABLES,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

export const BASE_COLOR_VAR_RECORD = resolveColorRecord(
  BASE_COLOR_RECORD,
);
