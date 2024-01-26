import { resolveAnimation } from '@brysonandrew/animation/resolveAnimation';

const presenceConfigs = [
  { direction: 'up', value: '100%' },
  { direction: 'right', value: 20, fade: 1 },
  { direction: 'up', value: '50%', fade: 1 },
  { fade: 1 },
] as const;
type TPresenceConfigs = typeof presenceConfigs;

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
  duration,
  duration2,
  transition,
  config,
  ...resolvers
} = resolveAnimation<
  TPresenceConfigs,
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
export const P = presenceRecord;
export const T = baseTransitionRecord;
export const R = resolvers;
export const DURATION = duration;
export const DURATION_2 = duration2;
export const TRANSITION = transition;
export const MOTION_CONFIG = config;
export const PRESENCE_OPACITY = P['-/1'];
export const DELAY008_EASEIN_TRANSITION =
  T['0.2/easeIn/0.08'];
export const PRESENCE_OPACITY_Y = P['up100%/-'];
export const PRESENCE_OPACITY_DELAY = {
  ...PRESENCE_OPACITY,
  transition: DELAY008_EASEIN_TRANSITION,
};
export * from './custom';
export * from './resolveAnimation';
export * from './resolveBaseTransitionRecord';
export * from './resolvePresenceRecord';
export * from './resolveTransitionRecord';
export * from './config/constants';
export * from './config/types';
