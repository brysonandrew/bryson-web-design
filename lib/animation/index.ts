import {
  INITIAL_KEY,
  IDLE_KEY,
  HOVER_KEY,
  EXIT_KEY,
  HOVER_VARIANT,
} from '@brysonandrew/animation/config/constants';
import {
  TAnimationProps,
  TMotionProps,
  TResolveParentAnimateConfig,
  TTransition,
  TTransitionProps,
  TVariant,
  TVariants,
  TResolveAnimationConfig,
  TPresenceConfigRecord,
  TBaseTransitionConfigs,
  TTransitionConfigs,
  TTarget,
  TEasing,
} from '@brysonandrew/animation/config/types';
import { resolveBaseTransitionRecord } from '@brysonandrew/animation/resolveBaseTransitionRecord';
import { resolvePresenceRecord } from '@brysonandrew/animation/resolvePresenceRecord';
import { resolveTransitionRecord } from '@brysonandrew/animation/resolveTransitionRecord';

export const resolveAnimation = <
  P extends TPresenceConfigs,
  B extends TBaseTransitionConfigs,
  T extends TTransitionConfigs,
>({
  ease = 'linear' as TEasing,
  duration = 0.2,
  presenceConfigs,
  baseTransitionConfigs,
}: TResolveAnimationConfig<P, B, T>) => {
  const duration2 = duration * 2;

  const transition: TTransition = {
    type: 'custom',
    ease,
    duration,
  };

  const durationDelay: TTransition = {
    delay: duration,
    ...transition,
  };

  const config: TTransitionProps = {
    transition,
  } as const;

  const config2: TTransition = {
    transition: {
      duration: duration2,
      ...transition,
    },
  };

  const resolvePresenceOpacity = (
    opacity: number,
  ): TAnimationProps =>
    resolvePresence({ opacity: 0 }, { opacity });

  const resolveParentAnimateConfig = (
    config: TResolveParentAnimateConfig = {},
  ): TMotionProps => {
    const { isHover } = config;

    if (typeof isHover === 'undefined')
      return {
        initial: INITIAL_KEY,
        animate: IDLE_KEY,
        whileHover: HOVER_KEY,
        exit: EXIT_KEY,
      };

    return {
      initial: INITIAL_KEY,
      animate: isHover ? HOVER_VARIANT : IDLE_KEY,
      exit: EXIT_KEY,
    };
  };

  const resolvePresence = (
    initial: TVariant,
    animate: TVariant,
    exit?: TVariant,
  ): TVariants => ({
    initial,
    animate,
    exit: exit ?? initial,
  });

  const presenceRecord = resolvePresenceRecord<P>(
    presenceConfigs,
  ) as TPresenceConfigRecord<P>;

  const baseTransitionRecord =
    resolveBaseTransitionRecord<B>(baseTransitionConfigs);

  const transitionRecord = resolveTransitionRecord(
    transitionConfigs,
  );

  const resolveRotateXPresence = (
    origin: '100%' | '-100%',
  ): TAnimationProps => {
    const initial: TTarget = {
      opacity: 1,
      y: origin,
      rotateX: 45,
    };
    const animate: TVariant = {
      opacity: 1,
      y: 0,
      rotateX: 0,
    };

    return {
      initial,
      animate,
      exit: initial,
      transition: {
        ease: 'easeInOut',
        ...config,
      },
    };
  };

  return {
    duration,
    transition,
    config,
    config2,
    durationDelay,
    resolvePresence,
    resolvePresenceOpacity,
    resolveParentAnimateConfig,
    presenceRecord,
    baseTransitionRecord,
    transitionRecord,
    resolveRotateXPresence,
  };
};

const presenceConfigs = [
  { direction: 'up', value: '100%', fade: 0 },
  { direction: 'right', value: 20, fade: 1 },
  { direction: 'up', value: '50%', fade: 1 },
  { direction: 'up', value: 0, fade: 1 },
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

const transitionConfigs = [] as const;

const {
  presenceRecord,
  baseTransitionRecord,
  transitionRecord,
  duration,
  transition,
  config,
  ...resolvers
} = resolveAnimation<
  TPresenceConfigs,
  typeof baseTransitionConfigs,
  typeof transitionConfigs
>({
  duration: 0.2,
  ease: 'linear',
  delay: 0,
  presenceConfigs,
  baseTransitionConfigs,
});
export const P = presenceRecord;
export const T = baseTransitionRecord;
export const R = resolvers;
export const DURATION = duration;
export const DURATION_2 = duration * 2;
export const TRANSITION = transition;
export const MOTION_CONFIG = config;
export const PRESENCE_OPACITY = P['up0/1'];
export const DELAY008_EASEIN_TRANSITION =
  T['0.2/0.08/easeIn'];
export const PRESENCE_OPACITY_Y = P['up50%/1'];
export const PRESENCE_OPACITY_DELAY = {
  ...PRESENCE_OPACITY,
  transition: DELAY008_EASEIN_TRANSITION,
};
export * from './custom';
export * from './resolveBaseTransitionRecord';
export * from './resolvePresenceRecord';
export * from './resolveTransitionRecord';
export * from './config/constants';
export * from './config/types';
