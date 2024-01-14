import type { FC } from 'react';
import type { TContext } from './types';
import { Reader } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Reader.Consumer>{children}</Reader.Consumer>;
