import {
  TBezierDefinition,
  TTransition,
} from '@brysonandrew/animation/config/types';

export const TRANSITION_CLASS_DARK_MODE =
  'duration-1000' as const;
const UNO_CLASS_DARK_MODE =
  `transition-colors ${TRANSITION_CLASS_DARK_MODE}` as const;
export const UNO_SHORTCUT_DARK_MODE = {
  'dark-mode-transition': UNO_CLASS_DARK_MODE,
} as const;

export const EASE_DARK_MODE: TBezierDefinition = [
  0.4, 0, 0.2, 1,
];
export const EASE_CSS_DARK_MODE = `cubic-bezier(${EASE_DARK_MODE})`;

export const DURATION_DARK_MODE_MS = parseInt(
  TRANSITION_CLASS_DARK_MODE.split('-')[1],
);

export const TRANSITION_DARK_MODE_CSS_VALUE = [
  'color',
  'background-color',
]
  .map(
    (v) =>
      `${v} ${DURATION_DARK_MODE_MS}ms ${EASE_CSS_DARK_MODE}`,
  )
  .join(', ');

export const DURATION_DARK_MODE =
  DURATION_DARK_MODE_MS / 1000;

export const TRANSITION_DARK_MODE: TTransition = {
  type: 'tween',
  ease: EASE_DARK_MODE,
  duration: DURATION_DARK_MODE,
};
