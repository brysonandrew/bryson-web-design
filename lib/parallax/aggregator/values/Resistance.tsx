import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { useResistance } from '../../hooks/useResistance';
import { TBaseConfig, TTransformRange } from '../../config';
import { TChildren } from '@brysonandrew/types/dom/main';

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
