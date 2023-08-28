import { useState } from 'react';
import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Contact } from '.';
import {
  INIT_CONTACT_STATE,
  TFormKey,
  TStatus,
  TFormState
} from '@pages/contact/config';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
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
    <Contact.Provider
      value={{ ...contact, onFocus, onStatus, onForm }}
    >
      {children}
    </Contact.Provider>
  );
};
