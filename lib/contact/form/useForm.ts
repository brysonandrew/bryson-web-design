import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';
import {
  TChangeEvent,
  TFocusEvent,
  TFormKey,
  TInputHandlers,
} from '../config/types';
import { useContact } from '@brysonandrew/contact';

type TConfig = {
  element: HTMLFormElement | null;
};
export const useForm = ({ element }: TConfig) => {
  const {
    status,
    isDisabled,
    onStatus,
    onFocus,
    onForm,
    onDisable,
    focusKey,
  } = useContact();

  const handleSend = async (event: FormEvent) => {
    event.preventDefault();

    if (element === null || isDisabled) return;
    onStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        element,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      onStatus('sent');
    } catch (error) {
      console.error(error);
      onStatus('error');
    }
  };

  const handleDisable = (isDisabled: boolean) => {
    onDisable(isDisabled);
  };

  const handleFocus = (event: TFocusEvent) => {
    onFocus((event.currentTarget.name as TFormKey) ?? null);
  };

  const handleBlur = (event: TFocusEvent) => {
    // enable if require no marker when no focus
    // if (event.currentTarget?.name === focusKey) {
    //   onFocus(null);
    // }
  };

  const handleChange = ({
    currentTarget: { name, value },
  }: TChangeEvent) => onForm({ [name]: value });

  const inputHandlers: TInputHandlers = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  return {
    isDisabled: isDisabled || status === 'sent',
    onSend: handleSend,
    onDisable: handleDisable,
    inputHandlers,
  };
};
export type TUseForm = ReturnType<typeof useForm>;
