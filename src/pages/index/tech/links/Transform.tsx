import { TChildren } from '@brysonandrew/config-types/dom';
import { MotionValue, useTransform } from 'framer-motion';
import { FC } from 'react';

type TProps = {
  children(transformedMotionValue?: MotionValue): TChildren;
  motionValue: MotionValue;
};
export const Transform: FC<TProps> = ({
  motionValue,
  children,
}) => {
  const transformedMotionValue = useTransform(
    motionValue,
    (v) => {
      const next = (Math.sin(v * Math.PI * 0.5) + 1) * 0.5 * 2 * 0.75 + 0.125; // sin clamp 0.125-0.875
      return next;
    },
  );
  return <>{children(transformedMotionValue)}</>;
};
