import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { TChildren } from '@brysonandrew/config-types/dom/main';
import { TBaseConfig, TTransformRange } from '@brysonandrew/parallax/config';
import { useResistance } from '@brysonandrew/parallax/hooks/useResistance';

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
