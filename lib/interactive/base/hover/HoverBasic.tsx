import { TChildren } from '@brysonandrew/config-types';
import {
  THoverBasicConfig,
  useHoverBasic,
} from '@brysonandrew/hooks-dom';
import type { FC } from 'react';

type TProps = {
  children(config: THoverBasicConfig): TChildren;
};
export const HoverBasic: FC<TProps> = ({ children }) => {
  const config = useHoverBasic();
  return <>{children(config)}</>;
};
