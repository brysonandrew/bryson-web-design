import { TFormState, TContactState, TContext } from './types';
import { createContext } from 'react';

export const CONTACT_FORM_INPUT_LAYOUT_ID = 'CONTACT_FORM_INPUT_LAYOUT_ID'
export const DEFAULT_FOCUS_KEY = 'name'
export const CONTACT = createContext<TContext>(
  {} as TContext,
);

export const INIT_STATE: TFormState = {
  email: '',
  name: '',
  message: '',
};

export const INIT_CONTACT_STATE: TContactState = {
  form: INIT_STATE,
  status: 'idle',
  focusKey: 'name',
};
