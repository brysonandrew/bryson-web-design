const STANDARD_PLAN_COLOR = '96, 165, 250';
const PLUS_PLAN_COLOR = '74, 222, 128';
const SELECT_PLAN_COLOR = '192, 132, 252';

export const PLANS_COLOR_VARIABLES = {
  standard: STANDARD_PLAN_COLOR,
  plus: PLUS_PLAN_COLOR,
  select: SELECT_PLAN_COLOR,
} as const;

export const GRADIENT_CLASS = {
  standard: 'bg-standard gradient-standard',
  plus: 'bg-plus gradient-plus',
  select: 'bg-select gradient-select',
} as const;
