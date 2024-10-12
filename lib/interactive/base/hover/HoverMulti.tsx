import { TChildren } from '@brysonandrew/config-types';
import {
  THoverMultiConfig,
  useHoverMulti,
} from '@brysonandrew/hooks-dom';
import type { FC } from 'react';

type TProps = {
  children(config: THoverMultiConfig): TChildren;
};
export const HoverMulti: FC<TProps> = ({ children }) => {
  const config = useHoverMulti();
  return <>{children(config)}</>;
};
