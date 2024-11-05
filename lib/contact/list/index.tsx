import {
  TClassValue,
  TUlProps,
} from '@brysonandrew/config-types';
import {
  ClipboardStateHandler,
  useClipboardState,
} from '@brysonandrew/notifications';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import ReactDom from 'react-dom';
import { Item } from './Item';

export type TPhoneLinkInfo = {
  display: string;
  withTrunk: string;
};

export type TContactListItems = {
  url: string;
  email: string;
  phone: TPhoneLinkInfo;
};
export type TContactListProps = TUlProps & {
  isCopy?: boolean;
  itemClassValue?: TClassValue;
} & Partial<TContactListItems>;
export const ContactList: FC<TContactListProps> = ({
  isCopy,
  classValue,
  itemClassValue,
  url,
  email,
  phone,
  ...props
}) => {
  const clipboardState = useClipboardState();
  const sharedProps = {
    classValue: itemClassValue,
    clipboardState,
    isCopy,
    ...props,
  };

  return (
    <>
      <ul className={cx('column-end', classValue)}>
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
      {ReactDom.createPortal(
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
