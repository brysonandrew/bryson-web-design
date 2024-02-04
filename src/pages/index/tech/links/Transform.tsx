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
      const next = (Math.sin(v * Math.PI * 0.5) + 1) * 0.5; // clamp 0-1
      return next;
    },
  );
  return <>{children(transformedMotionValue)}</>;
};
