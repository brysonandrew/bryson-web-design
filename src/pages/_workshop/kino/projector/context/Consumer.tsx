import type { FC } from 'react';
import type { TContext } from './types';
import { Projector } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Projector.Consumer>{children}</Projector.Consumer>;
