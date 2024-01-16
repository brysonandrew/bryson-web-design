import type { FC } from 'react';
import type { TContext } from './config/types';
import { GALLERY } from './config/constants';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <GALLERY.Consumer>{children}</GALLERY.Consumer>;
