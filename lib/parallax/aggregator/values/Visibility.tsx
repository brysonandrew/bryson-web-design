import { MotionValue } from 'framer-motion';
import { type FC } from 'react';
import {
  TBaseConfig,
  TVisibilityRange,
} from '@brysonandrew/parallax/config';
import { TChildren } from '@brysonandrew/config/types/dom/main';
import { useVisibility } from '@brysonandrew/parallax/hooks/useVisibility';

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
