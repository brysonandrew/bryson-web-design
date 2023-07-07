import { TUpdateRectProps } from "@components/InView";
import { MotionValue } from "framer-motion";

export const MAX_SCROLL = 600;

export type TStyleProps = {
  y: MotionValue;
  rotateX: MotionValue;
  filter: MotionValue<string>;
};

export type TFake3DMotionProps = {
  rectConfig: TUpdateRectProps;
  style: TStyleProps;
};

export type TPartialFake3DMotionProps = {
  rectConfig: Partial<TUpdateRectProps>;
  style: Partial<TStyleProps>;
};

export const EMPTY_PROPS: TPartialFake3DMotionProps = {
  rectConfig: {},
  style: {}
};

export type TFake3DMotionChildrenProps = TFake3DMotionProps | TPartialFake3DMotionProps

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

export type TOptionsConfig = {
  n?: string;

  dispersion?: TTransformRange;
  resistance?: TTransformRange;
  visibility?: TVisibilityRange;
};
 