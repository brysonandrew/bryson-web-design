import type { FC } from 'react';
import type { TContactContext } from '@brysonandrew/contact/config/types';
import { CONTACT } from '@brysonandrew/contact/config/constants';

type TConsumerProps = {
  children(values: TContactContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <CONTACT.Consumer>{children}</CONTACT.Consumer>;
