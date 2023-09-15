import type { FC } from 'react';
import type { TContext } from './types';
import { Kino } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Kino.Consumer>{children}</Kino.Consumer>;
