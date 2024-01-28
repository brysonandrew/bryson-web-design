import {
  Easing,
  BezierDefinition,
  EasingDefinition,
} from 'framer-motion';

export type TBezierDefinition = BezierDefinition;
export type TEasing = Easing;

export type TNumberPosPercentValue = `${number}%`;
export type TNumberNegPercentValue = `-${number}%`;
export type TNumberPercentValue =
  | TNumberPosPercentValue
  | TNumberNegPercentValue;

export type TEasingDefinition = EasingDefinition;

export type TNumberString = number | string;
