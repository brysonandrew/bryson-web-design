import { TRect } from '@t/dom';
import { MotionValue } from 'framer-motion';

export const MAX_SCROLL = 600;

export type TStyleProps = {
  y: MotionValue;
  rotateX: MotionValue;
  filter: MotionValue<string>;
};

export type TFake3DMotionProps = {
  style: TStyleProps;
};

export type TPartialStyle = Partial<TStyleProps>;
export type TPartialRect = Partial<DOMRect>;

export type TPartialFake3DMotionProps = {
  rect: TPartialRect;
  style: TPartialStyle;
  onUpdateRect: () => void;
};

export const EMPTY_PROPS: TPartialFake3DMotionProps = {
  rect: {},
  style: {},
  onUpdateRect: () => null,
};

export type TFake3DMotionChildrenProps =
  TPartialFake3DMotionProps;

export type TInputResolverConfig = {
  startScroll: number;
  windowHeight: number;
};

export type TBaseConfig = TInputResolverConfig & {
  scrollY: MotionValue;
};

export type TRange = [from: number, to: number];

export type TInputResolver = {
  input(config: TInputResolverConfig): TRange;
};

export type TTransformRange = TInputResolver & {
  output: TRange;
};

export type TVisibilityRange = TInputResolver & {
  blur?: TRange;
  opacity?: TRange;
  grayscale?: TRange;
};

export type TFake3DOptions = {
  dispersion?: TTransformRange;
  resistance?: TTransformRange;
  visibility?: TVisibilityRange;
};
