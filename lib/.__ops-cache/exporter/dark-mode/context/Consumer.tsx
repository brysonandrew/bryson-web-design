import type { FC } from 'react';
import { DARK_MODE } from './constants';
import { TUseDarkMode } from './types';

type TConsumerProps = {
  children(values: TUseDarkMode): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <DARK_MODE.Consumer>{children}</DARK_MODE.Consumer>;
