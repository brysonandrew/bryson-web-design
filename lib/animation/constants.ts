import {
  EASE,
  DURATION_DARK_MODE_MS,
} from '@brysonandrew/lib/context/dark-mode/useDarkMode';
import { TTransition } from '@brysonandrew/lib/animation/types';
import { resolvePresence } from '@brysonandrew/lib/animation/utils';
import { Transition } from 'framer-motion';

const isDisabled = false; // isMobile;

export const DURATION = isDisabled ? 0 : 0.2;
export const DURATION_MID = DURATION * 2;
export const DURATION_SLOW = DURATION_MID * 2;
export const DURATION_VERY_SLOW = DURATION_SLOW * 2;

export const DURATION_DARK_MODE = isDisabled
  ? 0
  : DURATION_DARK_MODE_MS / 1000;

export const TRANSITION_DARK_MODE: Transition = {
  ease: EASE,
  duration: DURATION_DARK_MODE,
};

export const TRANSITION: Transition = {
  ease: 'linear',
  duration: DURATION,
};

export const MOTION_CONFIG = {
  transition: TRANSITION,
};

export const MID_MOTION_TRANSITION: Transition = {
  type: 'inertia',
  ease: 'linear',
  duration: DURATION_MID,
};

export const MID_MOTION_CONFIG = {
  transition: MID_MOTION_TRANSITION,
};

export const VERY_SLOW_MOTION_CONFIG = {
  transition: {
    ease: 'linear',
    duration: DURATION_VERY_SLOW,
  },
};

export const resolveDynamicMotionConfig = (
  partial: Partial<TTransition>,
) => ({
  ...MOTION_CONFIG,
  ...partial,
});

export const resolveDynamicMidMotionConfig = (
  config: Partial<TTransition>,
) => ({
  transition: {
    ...MID_MOTION_CONFIG,
    ...config,
  },
});

export const DURATION_DELAY = {
  ...MOTION_CONFIG,
  delay: MOTION_CONFIG.transition.duration,
};

export const PRESENCE_OPACITY_SHIFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const PRESENCE_OPACITY_Y_SHIFT = resolvePresence(
  { opacity: 0, y: '50%' },
  { opacity: 1, y: '0%' },
);

export const PRESENCE_Y_SHIFT = resolvePresence(
  { y: '100%' },
  { y: '0%' },
);

export const PRESENCE_SCALE_HALF = resolvePresence(
  { scale: 1 },
  { scale: 0.5 },
);

export const PRESENCE_X_LEFT = resolvePresence(
  { x: '-140%' },
  { x: '0%' },
);

export const PRESENCE_OPACITY = resolvePresence(
  { opacity: 0 },
  { opacity: 1 },
);

export const resolvePresenceOpacity = (
  opacity: number,
) => ({
  initial: { opacity: 0 },
  animate: { opacity },
  exit: { opacity: 0 },
});

export const PRESENCE_Y = {
  initial: { y: '100%' },
  animate: { y: '0%' },
  exit: { y: '100%' },
};

export const PRESENCE_OPACITY_DELAY = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ...MOTION_CONFIG,
      ...DURATION_DELAY,
    },
  },
  exit: { opacity: 0 },
};

export const ORIGIN_50 = {
  originX: '50%',
  originY: '50%',
  originZ: '50%',
};
