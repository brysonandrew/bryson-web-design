import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import { useVisibility } from '../../hooks/useVisibility';
import {
  TBaseConfig,
  TVisibilityRange,
} from '../../config';
import { TChildren } from '@t/index';

type TProps = TBaseConfig & {
  children(result: MotionValue<number>): TChildren;
  range: TVisibilityRange;
};
export const Visibility: FC<TProps> = ({
  children,
  range,
  ...config
}) => {
  const result = useVisibility({
    ...config,
    ...range,
  });

  return <>{children(result)}</>;
};
