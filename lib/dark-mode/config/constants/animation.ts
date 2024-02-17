import {
  TBezierDefinition,
  TTransition,
} from '@brysonandrew/animation';

export const DARK_MODE_DURATION_MS = 1000;
export const DARK_MODE_DURATION =
  DARK_MODE_DURATION_MS / 1000;

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
