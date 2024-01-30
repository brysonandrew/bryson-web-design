import { resolveAnimation } from '@brysonandrew/animation/resolveAnimation';

const presenceConfigs = [
  { fade: [] },
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

const baseTransitionConfigs = [
  {
    duration: 0.4,
    ease: 'easeIn',
    delay: 0.08,
  },
  {
    duration: 0.2,
    ease: 'easeIn',
    delay: 0.08,
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
  duration: 0.2,
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
export const PRESENCE_Y = presenceRecord['fade|100%_up||'];
export const PRESENCE_OPACITY_Y =
  presenceRecord['fade|100%_up||'];

export const TRANSITION_02_EASEIN_008 =
  baseTransitionRecord['0.2|easeIn|0.08'];
export const TRANSITION_04_EASEIN_008 =
  baseTransitionRecord['0.4|easeIn|0.08'];

export const PRESENCE_OPACITY_DELAY = {
  ...PRESENCE_OPACITY,
  transition: TRANSITION_02_EASEIN_008,
};
export const resolvePresence = resolvers.resolvePresence;
export const resolveParentAnimateConfig =
  resolvers.resolveParentAnimateConfig;

export * from './resolveAnimation';
export * from './resolveTransitionRecord';
export * from './config/constants';
export * from './resolveBaseTransitionRecord';
export * from './resolveBaseTransitionRecord/resolveEaseStringify';
export * from './resolvePresenceRecord';
export * from './resolvePresenceRecord/key';
export * from './config/types';
export * from './config/types/values';
export * from './config/types/presence/config';
export * from './config/types/presence';
export * from './config/types/presence/key';
export * from './config/types/presence/value';
export * from './resolvePresenceRecord/value/fade';
export * from './resolvePresenceRecord/value';
export * from './resolvePresenceRecord/value/resolveNegative';
export * from './resolvePresenceRecord/value/rotate';
export * from './resolvePresenceRecord/value/shift';
export * from './resolvePresenceRecord/value/zoom';
export * from './config/types/transition/transition';
export * from './config/types/transition/base';
export * from './config/types/transition/base/key';
