import type { MotionValue } from 'framer-motion';
import { useVelocity, useTransform } from 'framer-motion';
import { TChildren } from '@brysonandrew/config-types/dom';
import { TTransformerProps } from '@brysonandrew/svg-filter';

type TProps = {
  motionValue: MotionValue;
  children(props: TTransformerProps): TChildren;
};
export const Motion2Speed = ({
  motionValue,
  children,
}: TProps) => {
  const velocity0 = useVelocity(motionValue);
  const acceleration0 = useVelocity(velocity0);
  const velocity = useTransform(velocity0, (v) => {
    return Math.abs(v) * 0.5;
  });
  const acceleration = useTransform(
    acceleration0,
    (v) => Math.abs(v) * 0.5
  );

  return <>{children({ velocity, acceleration })}</>;
};
  // const turbulenceLiteral = isVertical
  //   ? `${a} 0`
  //   : `0 ${a}`;
  // const turbulence = useMotionTemplate`${turbulenceLiteral}`;
  // const blurLiteral = isVertical ? `0 ${v}` : `${v} 0`;
  // const blur = useMotionTemplate`${blurLiteral}`;