import { MotionValue } from 'framer-motion';

export const MAX_SCROLL = 600;

export type TStyleProps = {
  y: MotionValue;
  rotateX: MotionValue;
  opacity: MotionValue;
};

export type TParallaxMotionProps = {
  style: TStyleProps;
};

export type TPartialStyle = Partial<TStyleProps>;
export type TPartialRect = Partial<DOMRect>;

export type TPartialParallaxMotionProps = {
  rect: TPartialRect;
  style: TPartialStyle;
  onUpdateRect: () => void;
};

export const EMPTY_PROPS: TPartialParallaxMotionProps = {
  rect: {},
  style: {},
  onUpdateRect: () => null,
};

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
  opacity?: TRange;
};

export type TParallaxOptions = {
  dispersion?: TTransformRange;
  resistance?: TTransformRange;
  visibility?: TVisibilityRange;
};
