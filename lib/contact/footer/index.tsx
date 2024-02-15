import { FC } from 'react';
import {
  ContactList,
  TContactListProps,
} from '@brysonandrew/contact-list';

type TProps = TContactListProps;
export const Footer: FC<TProps> = (props) => {
  return (
    <ContactList
      classValue='_contact_footer'
      isCopy
      {...props}
    />
  );
};
