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
  const { onStatus, onFocus, onForm, status, focusKey } =
    useContact();
  const handleStatus = onStatus;

  const onSend = async (event: FormEvent) => {
    if (element === null) return;
    handleStatus('sending');
    event.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        element,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      handleStatus('sent');
    } catch (error) {
      console.error(error);
      handleStatus('error'); 
    }
  };

  const updateFocus = onFocus;

  const handleFocus = (event: TFocusEvent) => {
    const target = event.currentTarget;
    if (!target) return;
    updateFocus(target.name as TFormKey);
  };

  const handleBlur = (event: TFocusEvent) => {
    const target = event.currentTarget;
    if (!target) return;
    if (target.name === focusKey) {
      // updateFocus(null);
    }
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
    isDisabled: status !== 'idle',
    inputHandlers,
    onSend,
  };
};
