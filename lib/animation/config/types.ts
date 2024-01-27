import {
  MotionValue,
  AnimationPlaybackControls,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  AnimationProps,
  Variant,
  Variants,
  Inertia,
  Keyframes,
  None,
  Spring,
  Tween,
  Orchestration,
  HoverHandlers,
  Easing,
  BezierDefinition,
  EasingDefinition,
  Target,
} from 'framer-motion';

type PermissiveTransitionDefinition = {
  [key: string]: any;
};
export type TWhen =
  | false
  | 'beforeChildren'
  | 'afterChildren'
  | string;
export type TEasingDefinition = EasingDefinition;

export type TMainTransition = {
  duration: number;
  ease: TEasing;
  delay: number;
};

export type TBaseTransition = {
  duration: number;
  ease: TEasingDefinition;
  delay: number;
};

export type TTransition =
  | Tween
  | Spring
  | Keyframes
  | Inertia
  | Just
  | None
  | PermissiveTransitionDefinition;

export type TAllTransitionProps = Orchestration &
  TTransition & {
    [key: string]: TTransition;
  } & {
    when: TWhen;
  };

export type TDirection = 'left' | 'right' | 'up' | 'down';
export type TXyKey = 'x' | 'y';

export type TPresenceConfig = {
  direction?: TDirection;
  value?: TPosPercentValue;
  fade?: number;
} & (
  | {
      fade: number;
    }
  | {
      direction: TDirection;
      value: TPosPercentValue;
    }
);
export type TPresenceConfigs = readonly TPresenceConfig[];

type TPlaceholder = '-';
type TFadeKey<T extends TPresenceConfig> =
  T['fade'] extends number ? T['fade'] : TPlaceholder;

type TDirectionValueKey<T extends TPresenceConfig> =
  T['direction'] extends TDirection
    ? T['value'] extends TNumberValue
      ? `${T['direction']}${T['value']}`
      : TPlaceholder
    : TPlaceholder;

export type TPresenceConfigKey<T extends TPresenceConfig> =
  `${TDirectionValueKey<T>}/${TFadeKey<T>}`;

export type TPresenceConfigRecord<
  T extends TPresenceConfigs,
> = {
  [U in T[number] as TPresenceConfigKey<U>]: U;
};

export type TBaseTransitionConfig = TBaseTransition;
export type TBaseTransitionConfigs =
  readonly TBaseTransitionConfig[];

type TStringifyEase<E extends TEasing> =
  E extends BezierDefinition
    ? `${E[0]},${E[1]},${E[2]},${E[3]}`
    : E;

export type TBaseTransitionConfigKey<
  U extends TBaseTransitionConfig,
> = `${U['duration']}/${TStringifyEase<
  U['ease']
>}/${U['delay']}`;

export type TBaseTransitionRecord<
  T extends TBaseTransitionConfigs,
> = {
  [U in T[number] as TBaseTransitionConfigKey<U>]: U;
};

export type TTransitionConfig = TTransition;
export type TTransitionConfigs =
  readonly TTransitionConfig[];

export type TResolveAnimationConfig<
  P extends TPresenceConfigs,
  B extends TBaseTransitionConfigs,
  T extends TTransitionConfigs,
> = Partial<TMainTransition> & {
  isDisabled?: boolean;
  presenceConfigs: P;
  baseTransitionConfigs: B;
  transitionConfigs?: T;
};

export type TBezierDefinition = BezierDefinition;
export type TEasing = Easing;

export type TPosPercentValue = `${number}%` | number;
export type TNumberValue = `-${number}%` | TPosPercentValue;

export type TAnimate =
  | AnimationControls
  | TargetAndTransition
  | VariantLabels
  | boolean;

export type TAnimationProps = AnimationProps;
export type TMotionProps = TAnimationProps & HoverHandlers;
type Just = {
  type: 'just';
};

export type TMotionPoint = {
  x: MotionValue;
  y: MotionValue;
};

export type TAnimationControlsPoint = {
  x: AnimationPlaybackControls;
  y: AnimationPlaybackControls;
};

export type TResolveParentAnimateConfig = {
  isHover?: boolean | null;
};

export type TAllMotionProps = Omit<
  CSSStyleDeclaration,
  'direction' | 'transition' | 'opacity' | 'appearance'
> & {
  x: number | string;
  y: number | string;
  z: number | string;
  rotateX: number | string;
  rotateY: number | string;
  rotateZ: number | string;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  skewX: number | string;
  skewY: number | string;
  opacity: number | string;
};

export type TMotionAttributes = Partial<TAllMotionProps>;

export type TStyleKeyCamelCase = keyof CSSStyleDeclaration;

export type TTransitionProps = Partial<TAllTransitionProps>;

export type TVariantLabels = VariantLabels;

export type TTarget = Target;
export type TInitial =
  | TTarget
  | VariantLabels
  | TMotionAttributes;
export type TVariant = Variant;
export type TVariants = Variants;
