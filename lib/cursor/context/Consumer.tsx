import type { FC } from 'react';
import type { TContext } from './types';
import { CURSOR } from './constants';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <CURSOR.Consumer>{children}</CURSOR.Consumer>;
