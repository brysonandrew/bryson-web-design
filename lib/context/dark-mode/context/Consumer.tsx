import type { FC } from 'react';
import { TUseDarkMode } from '../useDarkMode';
import { DARK_MODE } from './constants';

type TConsumerProps = {
  children(values: TUseDarkMode): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <DARK_MODE.Consumer>{children}</DARK_MODE.Consumer>;
