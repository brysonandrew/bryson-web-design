import {
  TAnimationProps,
  TMotionProps,
  TNumberValue,
  TResolveParentAnimateConfig,
  TTransition,
  TTransitionProps,
  TVariant,
  TVariants,
  TBezierDefinition,
  TVariantLabels,
} from '@brysonandrew/animation/config/types';

export const INITIAL_KEY: TVariantLabels = 'initial';
export const HOVER_KEY: TVariantLabels = 'hover';
export const IDLE_KEY: TVariantLabels = 'idle';
export const EXIT_KEY: TVariantLabels = 'exit';

export const PARENT_ANIMATE_CONFIG: TMotionProps = {
  initial: INITIAL_KEY,
  animate: IDLE_KEY,
  whileHover: HOVER_KEY,
  exit: EXIT_KEY,
};

export const TRANSITION_CLASS = 'duration-1000' as const;
export const EASE: TBezierDefinition = [0.4, 0, 0.2, 1];
export const EASE_CSS = `cubic-bezier(${EASE})`;
export const DURATION_DARK_MODE_MS = parseInt(
  TRANSITION_CLASS.split('-')[1],
);
export const TRANSITION_DARK_MODE_CSS_VALUE = [
  'color',
  'background-color',
]
  .map((v) => `${v} ${DURATION_DARK_MODE_MS}ms ${EASE_CSS}`)
  .join(', ');
export const DURATION = 0.2;
export const DURATION_MID = DURATION * 2;
export const DURATION_SLOW = DURATION_MID * 2;
export const DURATION_VERY_SLOW = DURATION_SLOW * 2;

export const DURATION_DARK_MODE =
  DURATION_DARK_MODE_MS / 1000;

export const ORIGIN_50: TTransition = {
  originX: '50%',
  originY: '50%',
  originZ: '50%',
};

export const EFFECT_ANIMATE_TRANSITION: TTransition = {
  ease: 'easeIn',
  duration: DURATION ? DURATION + 0.08 : DURATION,
  delay: 0.08,
};

export const EFFECT_HOVER_TRANSITION: TTransition = {
  ease: 'linear',
  duration: DURATION,
  delay: 0,
};

export const resolveParentAnimateConfig = (
  config: TResolveParentAnimateConfig = {},
): TMotionProps => {
  const { isHover } = config;
  if (typeof isHover === 'undefined')
    return PARENT_ANIMATE_CONFIG;

  return {
    initial: INITIAL_KEY,
    animate: isHover ? [IDLE_KEY, HOVER_KEY] : IDLE_KEY,
    exit: EXIT_KEY,
  };
};

export const resolveFadeRight = (
  isAnimate: boolean,
): TVariant => {
  const initial = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };

  return isAnimate ? animate : initial;
};

export const resolveFadeRightProps = (
  isAnimate: boolean,
): TVariants => ({
  initial: resolveFadeRight(false),
  animate: resolveFadeRight(isAnimate),
});

export const resolveFadeUp = (
  isAnimate: boolean,
): TVariant => {
  const animate = { opacity: 0, y: -20 };
  const initial = { opacity: 1, y: 0 };

  return isAnimate ? animate : initial;
};

export const resolveFadeUpProps = (
  isAnimate: boolean,
): TVariants => ({
  initial: resolveFadeUp(false),
  animate: resolveFadeUp(isAnimate),
});

export const resolvePresence = (
  initial: TVariant,
  animate: TVariant,
  exit?: TVariant,
): TVariants => ({
  initial,
  animate,
  exit: exit ?? initial,
});

export const resolveDynamicMotionConfig = (
  partial: Partial<TTransition>,
): TTransition => ({
  ...MOTION_CONFIG,
  ...partial,
});

export const resolveDynamicMidMotionConfig = (
  partial: Partial<TTransition>,
): TTransition => ({
  transition: resolveDynamicMotionConfig(partial),
});

export const TRANSITION_DARK_MODE: TTransition = {
  ease: EASE,
  duration: DURATION_DARK_MODE,
};

export const TRANSITION: TTransition = {
  ease: 'linear',
  duration: DURATION,
};

export const MOTION_CONFIG: TTransitionProps = {
  transition: TRANSITION,
} as const;

export const MID_MOTION_TRANSITION: TTransition = {
  type: 'inertia',
};

export const MID_MOTION_CONFIG: TTransition = {
  transition: MID_MOTION_TRANSITION,
};

export const VERY_SLOW_MOTION_CONFIG: TTransitionProps = {
  transition: {
    ease: 'linear',
    duration: DURATION_VERY_SLOW,
  },
};

export const DURATION_DELAY: TTransitionProps = {
  ...MOTION_CONFIG,
  delay: MOTION_CONFIG.transition.duration,
};

export const PRESENCE_OPACITY_SHIFT: TAnimationProps =
  resolvePresence(
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0 },
    { opacity: 0, x: 20 },
  );

export const PRESENCE_OPACITY_Y_SHIFT: TAnimationProps =
  resolvePresence(
    { opacity: 0, y: '50%' },
    { opacity: 1, y: '0%' },
  );

export const PRESENCE_Y_SHIFT: TAnimationProps =
  resolvePresence({ y: '100%' }, { y: '0%' });

export const PRESENCE_SCALE_HALF: TAnimationProps =
  resolvePresence({ scale: 1 }, { scale: 0.5 });

export const PRESENCE_X_LEFT: TAnimationProps =
  resolvePresence({ x: '-140%' }, { x: '0%' });

export const PRESENCE_OPACITY: TAnimationProps =
  resolvePresence({ opacity: 0 }, { opacity: 1 });

export const PRESENCE_Y: TAnimationProps = resolvePresence(
  { y: '100%' },
  { y: '0%' },
);

export const PRESENCE_OPACITY_DELAY: TAnimationProps =
  resolvePresence(
    { opacity: 0 },
    {
      opacity: 1,
      transition: {
        ...MOTION_CONFIG,
        ...DURATION_DELAY,
      },
    },
  );

export const resolveVerticalShiftPresence = (
  initialExitY: TNumberValue,
): TAnimationProps => {
  const initial: TVariant = {
    opacity: 1,
    y: initialExitY,
    rotateX: 45,
  };
  const animate: TVariant = {
    opacity: 1,
    y: 0,
    rotateX: 0,
  };

  return {
    ...resolvePresence(initial, animate),
    transition: {
      ease: 'easeInOut',
    },
  };
};

export const resolvePresenceOpacity = (
  opacity: number,
): TAnimationProps =>
  resolvePresence({ opacity: 0 }, { opacity });

export * from './config/types';
