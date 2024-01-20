import {
  resolvePresence,
  TTransition,
} from '@brysonandrew/animation';
import { Transition } from 'framer-motion';


export const TRANSITION_CLASS = 'duration-1000' as const;
export const EASE = [0.4, 0, 0.2, 1];
export const EASE_CSS = `cubic-bezier(${EASE})`;
export const DURATION_DARK_MODE_MS = parseInt(
  TRANSITION_CLASS.split('-')[1],
);
export const TRANSITION_DARK_MODE_CSS_VALUE = ['color', 'background-color']
  .map((v) => `${v} ${DURATION_DARK_MODE_MS}ms ${EASE_CSS}`)
  .join(', ');

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

export const INITIAL_KEY = 'initial';
export const HOVER_KEY = 'hover';
export const IDLE_KEY = 'idle';
export const EXIT_KEY = 'exit';

export const PARENT_ANIMATE_CONFIG = {
  initial: INITIAL_KEY,
  animate: IDLE_KEY,
  whileHover: HOVER_KEY,
  exit: EXIT_KEY,
};

type TResolveParentAnimateConfig = {
  isHover?: boolean | null;
};
export const resolveParentAnimateConfig = (
  config: TResolveParentAnimateConfig = {},
) => {
  const { isHover } = config;
  if (typeof isHover === 'undefined')
    return PARENT_ANIMATE_CONFIG;
  return {
    initial: INITIAL_KEY,
    animate: isHover ? [IDLE_KEY, HOVER_KEY] : IDLE_KEY,
    exit: EXIT_KEY,
  };
};

export const EFFECT_ANIMATE_TRANSITION = {
  ease: 'easeIn',
  duration: DURATION ? DURATION + 0.08 : DURATION,
  delay: 0.08,
};

export const EFFECT_HOVER_TRANSITION = {
  ease: 'linear',
  duration: DURATION,
  delay: 0,
};
