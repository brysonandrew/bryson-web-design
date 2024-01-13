import { TChildren } from '@lib/types/dom';
import { MotionValue, useTransform } from 'framer-motion';
import { FC } from 'react';
import { isDesktop } from 'react-device-detect';

type TProps = {
  children(transformedMotionValue?: MotionValue): TChildren;
  motionValue?: MotionValue;
};
export const Transform: FC<TProps> = ({
  motionValue,
  children,
}) => {
  if (!isDesktop || !motionValue) return <>{children()}</>;
  const transformedMotionValue = useTransform(
    motionValue,
    (v) => (Math.sin(v * Math.PI * 0.5) + 1) * 0.5,
  );
  return <>{children(transformedMotionValue)}</>;
};
