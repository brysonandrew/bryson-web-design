import { PLANS_COLOR_VARIABLES } from './pricing';

export const RGB_RECORD = {} as const;
export const OPACITY_RANGE_RGB_RECORD = {
  accent: '153, 204, 255',
  secondary: '45, 212, 191',
  highlight: '207, 250, 254',
} as const;

export const VARIABLES_RECORD = {
  ...PLANS_COLOR_VARIABLES,
  red: '#f87171',
  'dark-highlight': '#00aba9',
  'light-highlight': '#5bbad5',
} as const;
