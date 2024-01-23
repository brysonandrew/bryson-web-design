import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { TBaseConfig, TTransformRange } from '../../config';
import { TChildren } from '@brysonandrew/types/dom/main';
import { useDispersion } from '@brysonandrew/parallax/hooks/useDispersion';

type TProps = TBaseConfig & {
  children(result: MotionValue): TChildren;
  range: TTransformRange;
};
export const Dispersion: FC<TProps> = ({
  children,
  range,
  ...config
}) => {
  const result = useDispersion({
    ...config,
    ...range,
  });

  return <>{children(result)}</>;
};
