import { MotionValue } from 'framer-motion';

export type TTransformerProps = {
  velocity: MotionValue;
  acceleration: MotionValue;
};

export const AXES = ['x', 'y'] as const;
export type TDirectionAxis = (typeof AXES)[number];

export type TDirectionProps = {
  axis?: TDirectionAxis;
};

export type TMotionBlurProps = TDirectionProps & {
  turbulence: MotionValue;
  blur: MotionValue;
};
