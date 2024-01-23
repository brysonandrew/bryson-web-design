import { TClassValueProps } from '@brysonandrew/types';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { Item } from './Item';

export type TPhoneLinkInfo = {
  display: string;
  withTrunk: string;
};

export type TContactListProps = TClassValueProps &
  Partial<{
    url: string;
    email: string;
    phone: TPhoneLinkInfo;
    itemClassValue?: ClassValue;
  }>;
export const ContactList: FC<TContactListProps> = ({
  classValue,
  itemClassValue,
  url,
  email,
  phone,
}) => {
  const sharedProps = { classValue: itemClassValue };
  return (
    <ul className={clsx(classValue)}>
      {url && (
        <Item href={`https://${url}`} {...sharedProps}>
          {url}
        </Item>
      )}
      {email && (
        <Item href={`mailto:${email}`} {...sharedProps}>
          {email}
        </Item>
      )}
      {phone && (
        <Item
          href={`tel:${phone.withTrunk}`}
          {...sharedProps}
        >
          {phone.display}
        </Item>
      )}
    </ul>
  );
};

export * from './Item';
