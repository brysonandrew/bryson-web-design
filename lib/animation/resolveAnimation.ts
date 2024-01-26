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
  TTransitionConfigs,
  TTarget,
  TEasing,
  TBaseTransitionRecord,
  TBaseTransitionConfigs,
  TPresenceConfigs,
} from '@brysonandrew/animation/config/types';
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
  const duration2 = duration * 2;

  const transition: TTransition = {
    type: 'custom',
    ease,
    duration,
    delay,
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
        ...config,
      },
    };
  };

  return {
    duration,
    duration2,
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
