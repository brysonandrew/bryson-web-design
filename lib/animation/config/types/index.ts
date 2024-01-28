import {
  FADE_PREFIX,
  PLACEHOLDER,
  SUB_VALUE_DELIMITER,
  TTransitionConfigs,
  VALUE_DELIMITER,
} from '@brysonandrew/animation';
import { TBaseTransitionConfigs } from '@brysonandrew/animation/config/types/transition/base';
import {
  TEasing,
  TNumberString,
} from '@brysonandrew/animation/config/types/values';
import { TPresenceConfigs } from '@brysonandrew/animation/config/types/presence';
import {
  MotionValue,
  AnimationPlaybackControls,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  AnimationProps,
  Variant,
  Variants,
  HoverHandlers,
  Target,
} from 'framer-motion';

export type TMainTransition = {
  duration: number;
  ease: TEasing;
  delay: number;
};

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

export type TAnimate =
  | AnimationControls
  | TargetAndTransition
  | VariantLabels
  | boolean;

export type TAnimationProps = AnimationProps;
export type TMotionProps = TAnimationProps & HoverHandlers;

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

export type TFadeMotionProps = {
  opacity: TNumberString;
};
export type TFadeMotionPropsKey = keyof TFadeMotionProps;

export type TShiftMotionProps = {
  x: TNumberString;
  y: TNumberString;
  z: TNumberString;
};
export type TShiftAxis = keyof TShiftMotionProps;

export type TZoomMotionProps = {
  scale: number;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
};
export type TZoomMotionPropsKey = keyof TZoomMotionProps;

export type TRotateMotionProps = {
  rotate: TNumberString;
  rotateX: TNumberString;
  rotateY: TNumberString;
  rotateZ: TNumberString;
};
export type TRotateMotionPropsKey =
  keyof TRotateMotionProps;

export type TSkewMotionProps = {
  skew: TNumberString;
  skewX: TNumberString;
  skewY: TNumberString;
};
export type TSkewMotionPropsKey = keyof TSkewMotionProps;

export type TAllMotionProps = Omit<
  CSSStyleDeclaration,
  'transition' | 'opacity' | 'appearance'
> &
  TFadeMotionProps &
  TShiftMotionProps &
  TZoomMotionProps &
  TRotateMotionProps &
  TSkewMotionProps;

export type TMotionAttributes = Partial<TAllMotionProps>;

export type TStyleKeyCamelCase = keyof CSSStyleDeclaration;

export type TVariantLabels = VariantLabels;

export type TTarget = Target;
export type TInitial =
  | TTarget
  | VariantLabels
  | TMotionAttributes;
export type TVariant = Variant;
export type TVariants = Variants;

export type TPlaceholder = typeof PLACEHOLDER;
export type T_P = TPlaceholder;
export type TValueDelimiter = typeof VALUE_DELIMITER;
export type T_VD = TValueDelimiter;
export type TSubValueDelimiter = typeof SUB_VALUE_DELIMITER;
export type T_SVD = TSubValueDelimiter;
export type TFadePrefix = typeof FADE_PREFIX;
