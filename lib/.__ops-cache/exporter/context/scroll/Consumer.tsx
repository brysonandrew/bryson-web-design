import type { FC } from 'react';
import type { TScrollContext } from './types';
import { SCROLL } from './constants';

type TConsumerProps = {
  children(values: TScrollContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <SCROLL.Consumer>{children}</SCROLL.Consumer>;
