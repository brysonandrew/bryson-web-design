import type { FC } from 'react';
import type { TContext } from '@brysonandrew/color/types';
import { Screen } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Screen.Consumer>{children}</Screen.Consumer>;
