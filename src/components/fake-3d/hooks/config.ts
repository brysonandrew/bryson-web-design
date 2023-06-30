import { MotionValue } from "framer-motion";

export const MAX_SCROLL = 600;


export type TInputResolverConfig = {
  startScroll: number;
  windowHeight: number;
};

export type TBaseConfig = TInputResolverConfig & {
  scrollY: MotionValue;
};

export type TRange = [from: number, to: number];


export type TInputResolver = {
  input?(config: TInputResolverConfig): TRange;
};

export type TTransformRange = TInputResolver & {
  output?: TRange;
};

export type TVisibilityRange = TInputResolver & {
  blur?: TRange;
  opacity?: TRange;
  grayscale?: TRange;
};

export type TOptionsConfig = {
  dispersion?: TTransformRange;
  resistance?: TTransformRange;
  visibility?: TVisibilityRange;
};
