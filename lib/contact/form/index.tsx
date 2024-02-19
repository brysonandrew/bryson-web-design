import { TChildrenElement } from '@brysonandrew/config-types';
import {
  TUseForm,
  useForm,
} from '@brysonandrew/contact/form/useForm';
import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export type TFormChildrenProps = Pick<
  TUseForm,
  'isDisabled' | 'inputHandlers'
>;
type TProps = {
  children(props: TFormChildrenProps): TChildrenElement;
};
export const Form: FC<TProps> = ({ children }) => {
  const mutableRef = useRef<HTMLFormElement | null>(null);
  const { onSend, onDisable, ...rest } = useForm({
    element: mutableRef.current,
  });
  const { ref: inViewRef } = useInView({
    threshold: 0.2,
    onChange: (inView) => {
      onDisable(!inView);
    },
  });

  return (
    <motion.form
      className='_contact_form'
      ref={(instance) => {
        if (instance && !mutableRef.current) {
          mutableRef.current = instance;
          inViewRef(instance);
        }
      }}
      onSubmit={onSend}
    >
      {children(rest)}
    </motion.form>
  );
};
