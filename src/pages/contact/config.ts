import { HTMLMotionProps } from 'framer-motion';
import { ChangeEvent, FocusEvent } from 'react';

export type TStatus = 'idle' | 'sending' | 'sent' | 'error';

export const resolveButtonValue = (status: TStatus) => {
  switch (status) {
    case 'sending':
      return 'Sending...';
    case 'sent':
      return `Thank you, I will write back soon.`;
    case 'error':
      return 'Something went wrong ⚠️';
    default:
      return 'Send';
  }
};

export type TFormState = {
  email: string;
  name: string;
  message: string;
};

export const INIT_STATE: TFormState = {
  email: '',
  name: '',
  message: '',
};

export type TFormKey = keyof TFormState;

export type TContactState = {
  form: TFormState;
  status: TStatus;
  focusKey: TFormKey | null;
};

export const INIT_CONTACT_STATE: TContactState = {
  form: INIT_STATE,
  status: 'idle',
  focusKey: 'name',
};

export type TBaseInputProps = {
  name: TFormKey;
};

export type TFocusEvent = FocusEvent<
  HTMLInputElement | HTMLTextAreaElement,
  Element
>;

export type TChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type TInputHandlers = Pick<
  HTMLMotionProps<'input'> & HTMLMotionProps<'textarea'>,
  'onChange' | 'onBlur' | 'onFocus' | 'onKeyDown'
>;

export type TInputElement =
  | HTMLInputElement
  | HTMLTextAreaElement;
