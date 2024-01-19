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

export type TFilterProps = TDirectionProps & {
  id?: string;
  turbulence: MotionValue;
  blur: MotionValue;
};
