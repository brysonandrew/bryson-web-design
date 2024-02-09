import { TClassValueProps } from '@brysonandrew/config-types';
import {
  ClipboardStateHandler,
  useClipboardState,
} from '@brysonandrew/notifications';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';
import { createPortal } from 'react-dom';
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
  const clipboardState = useClipboardState();
  const sharedProps = {
    classValue: itemClassValue,
    clipboardState,
  };
  return (
    <>
      <ul className={clsx(classValue)}>
        {url && (
          <Item
            name='url'
            href={`https://${url}`}
            {...sharedProps}
          >
            {url}
          </Item>
        )}
        {email && (
          <Item
            name='email'
            href={`mailto:${email}`}
            {...sharedProps}
          >
            {email}
          </Item>
        )}
        {phone && (
          <Item
            name='phone'
            href={`tel:${phone.withTrunk}`}
            {...sharedProps}
          >
            {phone.display}
          </Item>
        )}
      </ul>
      {createPortal(
        <ClipboardStateHandler
          key='CLIPBOARD_STATE_HANDLER'
          {...clipboardState}
        />,
        document.body,
      )}
    </>
  );
};

export * from './Item';
