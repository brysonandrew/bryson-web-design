import { resolveAnimation } from '@brysonandrew/motion';

const presenceConfigs = [
  { fade: [] },
  { shift: ['100%', 'up'] },
  { shift: ['100%', 'down'] },
  { fade: [], shift: ['100%', 'up'] },
  { fade: [], shift: [20, 'right'] },
  { fade: [], shift: ['50%', 'up'] },
  {
    shift: ['-100%', 'down'],
    rotate: [45, 'pitch'],
  },
  {
    shift: ['100%', 'up'],
    rotate: [45, 'pitch'],
  },
] as const;

const duration = 0.2;
const duration2 = duration * 2;

const baseTransitionConfigs = [
  {
    duration: duration2,
    ease: 'easeIn',
    delay: 0.08,
  },
  {
    duration,
    ease: 'easeIn',
    delay: 0.08,
  },
  {
    duration,
    ease: 'easeIn',
    delay: duration2,
  },
] as const;

const transitionConfigs = [] as const;

const {
  presenceRecord,
  baseTransitionRecord,
  transitionRecord,
  motionConfig,
  ...resolvers
} = resolveAnimation<
  typeof presenceConfigs,
  typeof baseTransitionConfigs,
  typeof transitionConfigs
>({
  duration,
  ease: 'linear',
  delay: 0,
  presenceConfigs,
  baseTransitionConfigs,
  transitionConfigs,
});
export const MOTION_CONFIG = motionConfig;
export const TRANSITION = MOTION_CONFIG.transition;
export const DURATION = MOTION_CONFIG.transition.duration;

export const PRESENCE_OPACITY = presenceRecord['fade|||'];
export const PRESENCE_ROTATE_FROM_BOTTOM =
  presenceRecord['|100%_up||45_pitch'];
export const PRESENCE_ROTATE_FROM_TOP =
  presenceRecord['|-100%_down||45_pitch'];
export const PRESENCE_DOWN_Y =
  presenceRecord['|100%_down||'];
export const PRESENCE_UP_Y = presenceRecord['|100%_up||'];
export const PRESENCE_OPACITY_UP_Y =
  presenceRecord['fade|100%_up||'];

export const TRANSITION_02_EASE_IN_008 =
  baseTransitionRecord['0.2|easeIn|0.08'];
export const TRANSITION_04_EASE_IN_008 =
  baseTransitionRecord['0.4|easeIn|0.08'];
export const TRANSITION_02_EASE_IN_02 =
  baseTransitionRecord['0.2|easeIn|0.2'];
export const TRANSITION_02_EASE_IN_04 =
  baseTransitionRecord['0.2|easeIn|0.4'];

export const PRESENCE_OPACITY_DELAY = {
  ...PRESENCE_OPACITY,
  transition: TRANSITION_02_EASE_IN_008,
};

export const PRESENCE_OPACITY_DURATION_DELAY = {
  ...PRESENCE_OPACITY,
  transition: TRANSITION_02_EASE_IN_02,
};

export const PRESENCE_OPACITY_ANIMATE_DELAY_04 = {
  ...PRESENCE_OPACITY,
  animate: {
    ...PRESENCE_OPACITY.animate,
    transition: TRANSITION_02_EASE_IN_04,
  },
};

export const resolvePresence = resolvers.resolvePresence;
export const resolveParentAnimateConfig =
  resolvers.resolveParentAnimateConfig;

export * from 'lib/motion/core/config';
