import { TChildren } from '@brysonandrew/config-types';
import { THoverKeyConfig, useHoverKey } from '@brysonandrew/hooks-dom';
import type { FC } from 'react';

type TProps = {
  children(
    config: THoverKeyConfig,
  ): TChildren;
};
export const HoverKey: FC<TProps> = ({
  children,
}) => {
  const config = useHoverKey();
  return <>{children(config)}</>;
};
