import type { FC } from 'react';
import type { TContext } from './types';
import { VIEWER } from './constants';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <VIEWER.Consumer>{children}</VIEWER.Consumer>;
