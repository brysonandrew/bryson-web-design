import {
  PropsWithChildren,
  useState,
  useContext,
} from 'react';
import type { FC } from 'react';
import {
  TFormKey,
  TStatus,
  TFormState,
  TContactContext,
} from '@brysonandrew/contact/config/types';
import {
  INIT_CONTACT_STATE,
  CONTACT,
} from '@brysonandrew/contact/config/constants';

export const useContact = (): TContactContext =>
  useContext<TContactContext>(CONTACT);

export const ContactProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [contact, setState] = useState(INIT_CONTACT_STATE);
  const onFocus = (value: TFormKey | null) => {
    setState((prev) => ({ ...prev, focusKey: value }));
  };
  const onStatus = (value: TStatus) => {
    setState((prev) => ({ ...prev, status: value }));
  };
  const onForm = (value: Partial<TFormState>) => {
    setState((prev) => ({
      ...prev,
      form: { ...prev.form, ...value },
    }));
  };

  return (
    <CONTACT.Provider
      value={{ ...contact, onFocus, onStatus, onForm }}
    >
      {children}
    </CONTACT.Provider>
  );
};
