import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';
import {
  TChangeEvent,
  TFocusEvent,
  TFormKey,
  TInputHandlers,
  TStatus,
} from '../../config';
import { useContext } from '@state/Context';

type TConfig = {
  element: HTMLFormElement | null;
};
export const useForm = ({ element }: TConfig) => {
  const { contact, dispatch } = useContext();
  const current = { contact };
  const currentRef = useRef(current);
  currentRef.current = current;

  const handleStatus = (value: TStatus) =>
    dispatch({ type: 'contact-status', value });

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

  const updateFocus = (value: TFormKey | null) =>
    dispatch({ type: 'contact-focus', value });

  const handleFocus = (event: TFocusEvent) => {
    const target = event.currentTarget;
    if (!target) return;
    updateFocus(target.name as TFormKey);
  };

  const handleBlur = (event: TFocusEvent) => {
    const target = event.currentTarget;
    if (!target) return;
    if (
      target.name === currentRef.current.contact.focusKey
    ) {
      // updateFocus(null);
    }
  };

  const handleChange = ({
    currentTarget: { name, value },
  }: TChangeEvent) => {
    dispatch({
      type: 'contact-form',
      value: { [name]: value },
    });
  };

  const isDisabled = contact.status !== 'idle';
  const inputHandlers: TInputHandlers = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  return {
    isDisabled,
    inputHandlers,
    onSend,
  };
};
