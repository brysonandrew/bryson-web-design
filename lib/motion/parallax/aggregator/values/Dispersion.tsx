import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { TChildren } from '@brysonandrew/config-types/dom/main';
import { useDispersion } from '@brysonandrew/motion-parallax/hooks/useDispersion';
import { TBaseConfig, TTransformRange } from '@brysonandrew/motion-parallax/config';

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
