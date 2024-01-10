import { PLANS_COLOR_VARIABLES } from './pricing';

export const RGB_RECORD = {} as const;
export const OPACITY_RANGE_RGB_RECORD = {
  'baby-blue': '153, 204, 255',
  teal: '45, 212, 191',
  'teal-bright': '207, 250, 254',
} as const;

export const VARIABLES_RECORD = {
  ...PLANS_COLOR_VARIABLES,
  red: '#f87171',
} as const;
