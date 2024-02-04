import type { MotionValue } from 'framer-motion';
import { useVelocity, useTransform } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types/dom';
import { TTransformerProps } from '@brysonandrew/filters';

type TProps = {
  motionValue: MotionValue;
  children(props: TTransformerProps): TChildren;
};
export const Speed = ({
  motionValue,
  children,
}: TProps) => {
  const v = useVelocity(motionValue);
  const velocity = useTransform(v, (v) => Math.abs(v));
  const a = useVelocity(velocity);
  const acceleration = useTransform(a, (v) => Math.abs(v));

  return <>{children({ velocity, acceleration })}</>;
};
