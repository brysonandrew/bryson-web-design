import { TContactListProps } from '@brysonandrew/contact-list';
import { STATUSES } from '@brysonandrew/contact/config/constants';
import { HTMLMotionProps } from 'framer-motion';
import { ChangeEvent, FocusEvent } from 'react';

export type TStatus = (typeof STATUSES)[number];

export type TFormState = {
  email: string;
  name: string;
  message: string;
};

export type TFormKey = keyof TFormState;

export type TDisabledProps = {
  isDisabled: boolean;
};

export type TContactState = TDisabledProps & {
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

export type TContactContext = TContactState &
  TDisabledProps & {
    onFocus(value: TFormKey | null): void;
    onStatus(value: TStatus): void;
    onForm(value: Partial<TFormState>): void;
    onDisable(isDisabled: boolean): void;
  };

export type TFooterInfoProps = {
  footerInfo?: TContactListProps;
};
