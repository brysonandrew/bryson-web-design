import {
  TFormState,
  TContactState,
} from '@brysonandrew/contact/config/types';

export const CONTACT_FORM_INPUT_LAYOUT_ID =
  'CONTACT_FORM_INPUT_LAYOUT_ID';
export const DEFAULT_FOCUS_KEY = 'name';

export const STATUSES = [
  'idle',
  'sending',
  'sent',
  'error',
] as const;

export const INIT_STATE: TFormState = {
  email: '',
  name: '',
  message: '',
};

export const INIT_CONTACT_STATE: TContactState = {
  isDisabled: true,
  form: INIT_STATE,
  status: 'idle',
  focusKey: 'name',
};
