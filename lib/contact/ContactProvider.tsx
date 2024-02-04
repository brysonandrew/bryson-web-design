import {
  PropsWithChildren,
  useState,
  useContext,
  createContext,
} from 'react';
import type { FC } from 'react';
import {
  TFormKey,
  TStatus,
  TFormState,
  TContactContext,
} from '@brysonandrew/contact/config/types';
import { INIT_CONTACT_STATE } from '@brysonandrew/contact/config/constants';

const CONTACT = createContext<TContactContext>(
  {} as TContactContext,
);

export const useContact = (): TContactContext =>
  useContext<TContactContext>(CONTACT);

export const ContactProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [contact, setState] = useState(INIT_CONTACT_STATE);
  const onDisable = (value: boolean) => {
    setState((prev) => ({ ...prev, isDisabled: value }));
  };
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
      value={{
        ...contact,
        onFocus,
        onStatus,
        onForm,
        onDisable,
      }}
    >
      {children}
    </CONTACT.Provider>
  );
};
