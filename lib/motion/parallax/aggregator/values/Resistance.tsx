import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { TChildren } from '@brysonandrew/config-types/dom/main';
import { TBaseConfig, TTransformRange } from '@brysonandrew/motion/parallax/config';
import { useResistance } from '@brysonandrew/motion/parallax/hooks/useResistance';

type TProps = TBaseConfig & {
  children(result: MotionValue): TChildren;
  range: TTransformRange;
};
export const Resistance: FC<TProps> = ({
  children,
  range,
  ...config
}) => {
  const result = useResistance({
    ...config,
    ...range,
  });

  return <>{children(result)}</>;
};
