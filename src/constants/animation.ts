export const PRESENCE_OPACITY_SHIFT = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const PRESENCE_OPACITY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MOTION_CONFIG = {
  transition: {
    ease: "easeIn",
    duration: 0.2,
  },
};

export const HEADER_TRANSITION = {
  ...MOTION_CONFIG,
  delay: MOTION_CONFIG.transition.duration,
};

export const HEADER_TRANSITION_EXIT = {
  ...MOTION_CONFIG,
  delay: 0,
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
