import { PropsWithChildren, useState } from 'react';
import type { FC } from 'react';
import {
  TFormKey,
  TStatus,
  TFormState,
} from '@lib/contact/context/types';
import { INIT_CONTACT_STATE , CONTACT} from './constants';

export const Provider: FC<PropsWithChildren> = ({
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
