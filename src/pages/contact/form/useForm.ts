

import type { HTMLMotionProps } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FormEvent, ChangeEvent, FocusEvent, useRef } from 'react';
import { TFormKey, TStatus } from '../config';
import { useContext } from '@state/Context';
import { useTimeoutRef } from '@hooks/useTimeoutRef';

type TConfig = {
  element: HTMLFormElement | null;
};
export const useForm = ({ element }: TConfig) => {
  const { contact, dispatch } = useContext();
  const current = { contact };
  const currentRef = useRef(current);
  currentRef.current = current;
  const { timeoutRef } = useTimeoutRef();

  const handleStatus = (value: TStatus) => dispatch({ type: "contact-status", value });

  const onSend = async (event: FormEvent) => {
    if (element === null) return;
    handleStatus('sending');
    try {
      const result = await emailjs.sendForm(
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

    event.preventDefault();
  };

  const updateFocus = (value: TFormKey | null) => dispatch({ type: "contact-focus", value });


  const handleFocus = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    updateFocus(target.name as TFormKey);
  };

  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    timeoutRef.current = setTimeout(() => {
      const currentFocusKey = currentRef.current.contact.focusKey;
      if (target.name === currentFocusKey) {
        updateFocus(null);
      }
    }, 100);

  };

  const handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >) => {
    dispatch({ type: "contact-state", value: { [name]: value, } });
  };

  const isDisabled = contact.status !== 'idle';

  const inputHandlers: Pick<
    HTMLMotionProps<'input'> & HTMLMotionProps<'textarea'>,
    'onChange' | 'onBlur' | 'onFocus'
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  return {
    isDisabled,
    inputHandlers,
    onSend
  };
};