import { FC } from 'react';
import {
  ContactList,
  TContactListProps,
} from '@brysonandrew/contact-list';

type TProps = TContactListProps;
export const Footer: FC<TProps> = (props) => {
  return <ContactList isCopy {...props} />;
};
