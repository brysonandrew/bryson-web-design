import {
  TBezierDefinition,
  TTransition,
} from '@brysonandrew/animation';

export const DARK_MODE_DURATION_MS = 1000;
export const DARK_MODE_DURATION =
  DARK_MODE_DURATION_MS / 1000;
export const DARK_MODE_DURATION_CLASS =
  'duration-1000' as const;
export const DARK_MODE_UNO_CLASS =
  `transition-opacity ${DARK_MODE_DURATION_CLASS}` as const;

export const DARK_MODE_UNO_SHORTCUTS = {
  'dark-mode-transition': DARK_MODE_UNO_CLASS,
  'opacity-light':
    'dark:opacity-0 opacity-100 dark-mode-transition',
  'opacity-dark':
    'dark:opacity-100 opacity-0 dark-mode-transition',
} as const;

export const DARK_MODE_EASE: TBezierDefinition = [
  0.4, 0, 0.2, 1,
];
export const DARK_MODE_EASE_CSS = `cubic-bezier(${DARK_MODE_EASE})`;

export const DARK_MODE_TRANSITION_CSS_VALUE = ['opacity']
  .map(
    (v) =>
      `${v} ${DARK_MODE_DURATION_MS}ms ${DARK_MODE_EASE_CSS}`,
  )
  .join(', ');

export const DARK_MODE_TRANSITION: TTransition = {
  type: 'tween',
  ease: DARK_MODE_EASE,
  duration: DARK_MODE_DURATION,
};
