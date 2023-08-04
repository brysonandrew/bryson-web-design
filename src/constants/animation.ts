import { TTransition } from '@t/animation';
import { resolvePresence } from '@utils/animation';
import { Keyframes, Transition } from 'framer-motion';

export const BASIC_VARIANT_KEYS = {
  initial: 'initial',
  animate: 'animate',
  whileHover: 'hover',
};

export const TRANSITION = {
  ease: 'linear',
  duration: 0.2,
}

export const MOTION_CONFIG = {
  transition: TRANSITION,
};

export const MID_MOTION_TRANSITION = {
  ease: 'linear',
  duration: 0.5,
};

export const MID_MOTION_CONFIG = {
  transition: MID_MOTION_TRANSITION,
};

export const SLOW_MOTION_TRANSITION = {
  ease: 'linear',
  duration: 1,
};

export const SLOW_MOTION_CONFIG = {
  transition: SLOW_MOTION_TRANSITION,
};

export const VERY_SLOW_MOTION_CONFIG = {
  transition: {
    ease: 'linear',
    duration: 2,
  },
};

export const resolveDynamicMotionConfig = (
  partial: Partial<TTransition>,
) => ({
  ...MOTION_CONFIG,
  ...partial,
});

export const resolveDynamicSlowMotionConfig = (
  config: Partial<TTransition>,
) => ({
  transition: {
    ...SLOW_MOTION_CONFIG,
    ...config,
  },
});

export const ZERO_MOTION_CONFIG = {
  transition: {
    ease: 'linear',
    duration: 0,
    delay: 0,
  },
};

export const DURATION_DELAY = {
  ...MOTION_CONFIG,
  delay: MOTION_CONFIG.transition.duration,
};

export const PRESENCE_OPACITY_SHIFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const PRESENCE_OPACITY_Y_SHIFT = {
  initial: { opacity: 0, y: '50%' },
  animate: { opacity: 1, y: '0%' },
  exit: { opacity: 0, y: '50%' },
};

export const PRESENCE_Y_SHIFT = {
  initial: { y: '100%' },
  animate: { y: '0%' },
  exit: { y: '100%' },
};

export const PRESENCE_SCALE_HALF = resolvePresence(
  { scale: 1 },
  { scale: 0.5 },
);

export const PRESENCE_X_LEFT = resolvePresence(
  { x: '-140%' },
  { x: '0%' },
);

export const PRESENCE_OPACITY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const resolvePresenceOpacity = (
  opacity: number,
) => ({
  initial: { opacity: 0 },
  animate: { opacity },
  exit: { opacity: 0 },
});

export const PRESENCE_OPACITY_01 = {
  initial: { opacity: 0 },
  animate: { opacity: 0.1 },
  exit: { opacity: 0 },
};

export const PRESENCE_OPACITY_06 = {
  initial: { opacity: 0 },
  animate: { opacity: 0.1 },
  exit: { opacity: 0 },
};

export const PRESENCE_SCALE = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

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

export const MUGSHOT_TRANSITION = {
  ...MOTION_CONFIG,
  duration: 0.6,
  delay: MOTION_CONFIG.transition.duration * 1.5,
};

export const MUGSHOT_TRANSITION_EXIT = {
  ...MOTION_CONFIG,
  duration: 0.1,
  delay: 0,
};

export const FOOTER_TRANSITION = {
  ...MOTION_CONFIG,
  delay: MOTION_CONFIG.transition.duration * 2,
};

export const FOOTER_TRANSITION_EXIT = {
  ...MOTION_CONFIG,
  delay: 0,
};

export const DURATION_DELAY_TRANSITION = {
  transition: {
    ...MOTION_CONFIG,
    delay: MOTION_CONFIG.transition.duration,
  },
};

export const DELAY_VISIBILITY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  ...DURATION_DELAY_TRANSITION,
};

export const SCROLL_DECORATION_PRESENCE = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
  exit: { opacity: 0 },
};
