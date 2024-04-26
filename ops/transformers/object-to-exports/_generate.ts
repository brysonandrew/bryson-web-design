export default {
  DURATION: 0.2,
  EXIT_KEY: 'exit',
  FADE_PREFIX: 'fade',
  HOVER_KEY: 'hover',
  HOVER_VARIANT: ['idle', 'hover'],
  IDLE_KEY: 'idle',
  INITIAL_KEY: 'initial',
  MOTION_CONFIG: {
    transition: {
      type: 'custom',
      ease: 'linear',
      duration: 0.2,
      delay: 0,
    },
  },
  PLACEHOLDER: '',
  PRESENCE_OPACITY: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  PRESENCE_OPACITY_ANIMATE_DELAY_04: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  PRESENCE_OPACITY_DELAY: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.2,
      ease: 'easeIn',
      delay: 0.08,
    },
  },
  PRESENCE_OPACITY_DURATION_DELAY: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.2,
      ease: 'easeIn',
      delay: 0.2,
    },
  },
  PRESENCE_OPACITY_UP_Y: {
    initial: {
      opacity: 0,
      y: '100%',
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '100%',
    },
  },
  PRESENCE_ROTATE_FROM_BOTTOM: {
    initial: {
      y: '100%',
      rotateX: 45,
    },
    animate: {
      y: 0,
      rotateX: 0,
    },
    exit: {
      y: '100%',
      rotateX: 45,
    },
  },
  PRESENCE_ROTATE_FROM_TOP: {
    initial: {
      y: '-100%',
      rotateX: 45,
    },
    animate: {
      y: 0,
      rotateX: 0,
    },
    exit: {
      y: '-100%',
      rotateX: 45,
    },
  },
  PRESENCE_SCALE_X: {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
    },
    exit: {
      scaleX: 0,
    },
  },
  PRESENCE_UP_Y: {
    initial: {
      opacity: 0,
      y: '100%',
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '100%',
    },
  },
  ROTATE_DIRECTIONS: ['clockwise', 'anti-clockwise'],
  ROTATE_TYPES: ['roll', 'pitch', 'yaw'],
  SHIFT_DIRECTIONS: ['left', 'right', 'up', 'down'],
  SUB_VALUE_DELIMITER: '_',
  TRANSITION: {
    type: 'custom',
    ease: 'linear',
    duration: 0.2,
    delay: 0,
  },
  TRANSITION_02_EASEIN_008: {
    duration: 0.2,
    ease: 'easeIn',
    delay: 0.08,
  },
  TRANSITION_02_EASE_IN_02: {
    duration: 0.2,
    ease: 'easeIn',
    delay: 0.2,
  },
  TRANSITION_02_EASE_IN_04: {
    duration: 0.2,
    ease: 'easeIn',
    delay: 0.4,
  },
  TRANSITION_04_EASEIN_008: {
    duration: 0.4,
    ease: 'easeIn',
    delay: 0.08,
  },
  VALUE_DELIMITER: '|',
  ZOOM_DIRECTIONS: ['height', 'width', 'depth'],
  ZOOM_TYPES: ['expand', 'shrink'],
  _SVD: '_',
  _VD: '|',
};
