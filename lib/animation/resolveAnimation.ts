import {
  TTransitionConfigs,
  TResolveAnimationConfig,
  TAnimationProps,
  TResolveParentAnimateConfig,
  TMotionProps,
  TVariant,
  TVariants,
  TTarget,
} from '@brysonandrew/animation';
import {
  INITIAL_KEY,
  IDLE_KEY,
  HOVER_KEY,
  EXIT_KEY,
  HOVER_VARIANT,
} from '@brysonandrew/animation/config/constants';
import {
  TBaseTransitionConfigs,
  TBaseTransitionRecord,
} from '@brysonandrew/animation/config/types/transition/base';
import {
  TPresenceConfigs,
  TPresenceConfigRecord,
} from '@brysonandrew/animation/config/types/presence';
import {
  TTransition,
  TTransitionProps,
} from '@brysonandrew/animation/config/types/transition/transition';
import { TEasing } from '@brysonandrew/animation/config/types/values';

import { resolveBaseTransitionRecord } from '@brysonandrew/animation/resolveBaseTransitionRecord';
import { resolvePresenceRecord } from '@brysonandrew/animation/resolvePresenceRecord';
import { resolveTransitionRecord } from '@brysonandrew/animation/resolveTransitionRecord';

export const resolveAnimation = <
  P extends TPresenceConfigs,
  B extends TBaseTransitionConfigs,
  T extends TTransitionConfigs = TTransitionConfigs,
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
    resolveBaseTransitionRecord<B>(
      baseTransitionConfigs,
    ) as TBaseTransitionRecord<B>;

  const transitionRecord = resolveTransitionRecord(
    transitionConfigs ?? [],
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
