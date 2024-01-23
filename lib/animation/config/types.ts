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
} from 'framer-motion';

export type TBezierDefinition = BezierDefinition;
export type TEasing = Easing;

export type TNumberValue = `${number}%` | number;

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
type PermissiveTransitionDefinition = {
  [key: string]: any;
};
export type TWhen =
  | false
  | 'beforeChildren'
  | 'afterChildren'
  | string;
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

export type TTransitionProps = Partial<TAllTransitionProps>;

export type TVariantLabels = VariantLabels;

export type TVariant = Variant;
export type TVariants = Variants;

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
