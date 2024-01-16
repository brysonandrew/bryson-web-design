import { HTMLMotionProps } from 'framer-motion';
import { ChangeEvent, FocusEvent } from 'react';

export type TStatus = 'idle' | 'sending' | 'sent' | 'error';

export type TFormState = {
  email: string;
  name: string;
  message: string;
};

export type TFormKey = keyof TFormState;

export type TContactState = {
  form: TFormState;
  status: TStatus;
  focusKey: TFormKey | null;
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
