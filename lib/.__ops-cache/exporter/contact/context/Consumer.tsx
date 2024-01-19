import type { FC } from 'react';
import type { TContactContext } from './types';
import { CONTACT } from './constants';

type TConsumerProps = {
  children(values: TContactContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <CONTACT.Consumer>{children}</CONTACT.Consumer>;
