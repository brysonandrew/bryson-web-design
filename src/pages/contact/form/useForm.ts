import type { HTMLMotionProps } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FormEvent, useState, ChangeEvent, FocusEvent } from 'react';
import { INIT_STATE, TSendingState } from '../config';

type TConfig = {
  form: HTMLFormElement | null;
};
export const useForm = ({ form }: TConfig) => {
  const [focusKey, setFocus] = useState<string | null>(null);
  const [state, setState] = useState(INIT_STATE);
  const [sendingState, setSendingState] =
    useState<TSendingState>('idle');

  const onSend = async (event: FormEvent) => {
    setSendingState('sending');
    event.preventDefault();

    if (form === null) return;

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      setSendingState('sent');
    } catch (error) {
      console.error(error);
      setSendingState('error');
    }
  };

  const handleFocus = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    setFocus(target.name);
  };

  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    if (focusKey === target.name) {
      setFocus(null);
    }
  };

  const handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const isDisabled = sendingState !== 'idle';

  const focusHandlers: Pick<
    HTMLMotionProps<'input'>,
    'onChange' | 'onBlur' | 'onFocus'
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  const textareaFocusHandlers: Pick<
    HTMLMotionProps<'textarea'>,
    'onChange' | 'onBlur' | 'onFocus'
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };


  return {
    isDisabled,
    focusKey,
    state,
    sendingState,
    focusHandlers,
    textareaFocusHandlers,
    onSend
  };
};