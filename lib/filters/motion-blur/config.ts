import { MotionValue } from 'framer-motion';

export type TTransformerProps = {
  velocity: MotionValue;
  acceleration: MotionValue;
};

export const DIRECTIONS = ['x', 'y'] as const;
export type TDirectionKey = (typeof DIRECTIONS)[number];

export type TDirectionProps = {
  direction?: TDirectionKey;
};

export type TMotionBlurProps = TDirectionProps & {
  turbulence: MotionValue;
  blur: MotionValue;
};

export type TIdProps = {
  id?: string;
};
