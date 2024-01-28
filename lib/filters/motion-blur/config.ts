import { MotionValue } from 'framer-motion';

export type TTransformerProps = {
  velocity: MotionValue;
  acceleration: MotionValue;
};

export const AXES = ['x', 'y'] as const;
export type TShiftAxis = (typeof AXES)[number];

export type TShiftProps = {
  axis?: TShiftAxis;
};

export type TMotionBlurProps = TShiftProps & {
  turbulence: MotionValue;
  blur: MotionValue;
};

export type TIdProps = {
  id?: string;
};
