# Usage example

import {
  resolveBaseTransitionRecord,
  resolvePresenceRecord,
  resolveTransitionRecord,
} from '@brysonandrew/motion-core';
import {
  TPresenceConfigs,
  TBaseTransitionConfigs,
  TTransitionConfigs,
  TEasing,
  TResolveAnimationConfig,
  TResolveParentAnimateConfig,
  TMotionProps,
  TVariant,
  TVariants,
  TPresenceConfigRecord,
  TBaseTransitionRecord,
  TAnimationProps,
  TTarget,
} from '@brysonandrew/motion-config-types';
import {
  INITIAL_KEY,
  IDLE_KEY,
  HOVER_KEY,
  EXIT_KEY,
  HOVER_VARIANT,
} from '@brysonandrew/motion-config-constants';

export const resolveAnimation = <
  P extends TPresenceConfigs,
  B extends TBaseTransitionConfigs,
  T extends TTransitionConfigs = TTransitionConfigs
>({
  ease = 'linear' as TEasing,
  duration = 0.2,
  delay = 0,
  presenceConfigs,
  baseTransitionConfigs,
  transitionConfigs,
}: TResolveAnimationConfig<P, B, T>) => {
  const transition = {
    type: 'custom',
    ease,
    duration,
    delay,
  } as const;

  const motionConfig = {
    transition,
  } as const;

  const resolveParentAnimateConfig = (
    config: TResolveParentAnimateConfig = {}
  ): TMotionProps => {
    const isHover = config.isHover;

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
    exit?: TVariant
  ): TVariants => ({
    initial,
    animate,
    exit: exit ?? initial,
  });

  const presenceRecord = resolvePresenceRecord<P>(
    presenceConfigs
  ) as TPresenceConfigRecord<P>;

  const baseTransitionRecord =
    resolveBaseTransitionRecord<B>(
      baseTransitionConfigs
    ) as TBaseTransitionRecord<B>;

  const transitionRecord = resolveTransitionRecord(
    transitionConfigs ?? []
  );

  const resolveRotateXPresence = (
    origin: '100%' | '-100%'
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
        ...motionConfig,
      },
    };
  };

  return {
    motionConfig,
    resolvePresence,
    resolveParentAnimateConfig,
    presenceRecord,
    baseTransitionRecord,
    transitionRecord,
    resolveRotateXPresence,
  };
};

const duration = 0.2;
const duration2 = duration * 2;

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
  {
    zoom: [0, 'width'],
  },
] as const;

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
  {
    duration,
    ease: 'easeIn',
    delay: duration,
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

const PRESENCE_OPACITY = presenceRecord['fade|||'];
const PRESENCE_ROTATE_FROM_BOTTOM =
  presenceRecord['|100%_up||45_pitch'];
const PRESENCE_ROTATE_FROM_TOP =
  presenceRecord['|-100%_down||45_pitch'];
const PRESENCE_UP_Y =
  presenceRecord['fade|100%_up||'];
const PRESENCE_OPACITY_UP_Y =
  presenceRecord['fade|100%_up||'];
const PRESENCE_SCALE_X = {
  ...presenceRecord['||0_width|'],
};

const TRANSITION_02_EASEIN_008 =
  baseTransitionRecord['0.2|easeIn|0.08'];
const TRANSITION_04_EASEIN_008 =
  baseTransitionRecord['0.4|easeIn|0.08'];
const TRANSITION_02_EASE_IN_04 =
  baseTransitionRecord['0.2|easeIn|0.4'];
const TRANSITION_02_EASE_IN_02 =
  baseTransitionRecord['0.2|easeIn|0.2'];

const MOTION_CONFIG = motionConfig;
const TRANSITION = MOTION_CONFIG.transition;
const DURATION = MOTION_CONFIG.transition.duration;

const resolvePresence = resolvers.resolvePresence;
const resolveParentAnimateConfig =
  resolvers.resolveParentAnimateConfig;