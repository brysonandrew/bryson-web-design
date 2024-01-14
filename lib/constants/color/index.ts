import { GRAYSCALE_COLOR_VARIABLES } from './grayscale';

export const BASE_RGB_RECORD = {} as const;

export const BASE_OPACITY_RGB_RECORD = {} as const;

export const BASE_COLOR_RECORD = {
  ...GRAYSCALE_COLOR_VARIABLES,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;
