import { TChildrenElement } from '@brysonandrew/config-types';
import {
  TUseForm,
  useForm,
} from '@brysonandrew/contact/form/useForm';
import { useRefState } from '@brysonandrew/hooks-dom/useRefState';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export type TFormChildrenProps = Pick<
  TUseForm,
  'isDisabled' | 'inputHandlers'
>;
type TProps = {
  children(props: TFormChildrenProps): TChildrenElement;
};
export const Form: FC<TProps> = ({ children }) => {
  const [form, setForm] = useState<HTMLFormElement | null>(
    null,
  );
  const { onSend, onDisable, ...rest } = useForm({
    element: form,
  });
  const { ref: inViewRef } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      onDisable(!inView);
    },
  });

  const handleFormRef = (element: HTMLFormElement) => {
    setForm(element);
    inViewRef(element);
  };

  const handleRef = useRefState<HTMLFormElement>(
    form,
    handleFormRef,
  );

  return (
    <motion.form
      className='_contact_form'
      ref={handleRef}
      onSubmit={onSend}
    >
      {children(rest)}
    </motion.form>
  );
};
