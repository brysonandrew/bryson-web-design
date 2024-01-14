import type { FC } from 'react';
import type { TContext } from './config/types';
import { APP } from './config/constants';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <APP.Consumer>{children}</APP.Consumer>;
