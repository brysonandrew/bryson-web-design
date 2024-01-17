import type { FC } from 'react';
import type { TContext } from './types';
import { CONTACT } from './constants';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <CONTACT.Consumer>{children}</CONTACT.Consumer>;
