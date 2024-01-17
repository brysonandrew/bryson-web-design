import { TFormState, TContactState } from './types';

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
