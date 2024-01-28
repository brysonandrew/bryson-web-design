import { TPresenceConfig } from '@brysonandrew/animation/config/types/presence/config';
import { resolveAnimation } from '@brysonandrew/animation/resolveAnimation';

const ROTATE_FROM_BOTTOM: TPresenceConfig = {
  shift: ['100%', 'up'],
  rotate: [45, 'pitch'],
} as const;
const ROTATE_FROM_TOP: TPresenceConfig = {
  shift: ['-100%', 'down'],
  rotate: [45, 'pitch'],
} as const;
const presenceConfigs = [
  ROTATE_FROM_BOTTOM,
  ROTATE_FROM_TOP,
  { fade: [] },
  { fade: [], shift: ['100%', 'up'] },
  { fade: [], shift: [20, 'right'] },
  { fade: [], shift: ['50%', 'up'] },
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
type TBaseTransitionConfigs = typeof baseTransitionConfigs;

const transitionConfigs = [] as const;
export type TTransitionConfigs = typeof transitionConfigs;

const {
  presenceRecord,
  baseTransitionRecord,
  transitionRecord,
  motionConfig,
  ...resolvers
} = resolveAnimation<
  typeof presenceConfigs,
  TBaseTransitionConfigs,
  TTransitionConfigs
>({
  duration: 0.2,
  ease: 'linear',
  delay: 0,
  presenceConfigs,
  baseTransitionConfigs,
  transitionConfigs,
});
export const PR = presenceRecord;
export const TR = baseTransitionRecord;
export const RR = resolvers;
export const MOTION_CONFIG = motionConfig;
export const TRANSITION = MOTION_CONFIG.transition;
export const DURATION = MOTION_CONFIG.transition.duration;
console.log(PR);
export const TRANSITION_02_EASEIN_008 =
  TR['0.2|easeIn|0.08'];
export const TRANSITION_04_EASEIN_008 =
  TR['0.4|easeIn|0.08'];
export const PRESENCE_OPACITY = PR['fade|||'];
export const PRESENCE_Y = PR['|100%_up||'];
export const PRESENCE_OPACITY_Y = PR['fade|100%_up||'];
export const PRESENCE_OPACITY_DELAY = {
  ...PRESENCE_OPACITY,
  transition: TRANSITION_02_EASEIN_008,
};
export * from './resolveAnimation';
export * from './resolveBaseTransitionRecord';
export * from './resolvePresenceRecord';
export * from './resolveTransitionRecord';
export * from './config/constants';
export * from './config/types';
