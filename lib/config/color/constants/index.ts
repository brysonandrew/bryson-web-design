import { GRAYSCALE_COLOR_VARIABLES } from './grayscale';

export const BASE_COLOR_RECORD = {
  ...GRAYSCALE_COLOR_VARIABLES,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;
