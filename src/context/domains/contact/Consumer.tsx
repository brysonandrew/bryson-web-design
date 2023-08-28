import type { FC } from 'react';
import type { TContext } from './types';
import { Contact } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Contact.Consumer>{children}</Contact.Consumer>;
