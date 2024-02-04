import { TChildrenElement } from '@brysonandrew/config-types';
import { TFooterInfoProps } from '@brysonandrew/contact/config/types';
import { useContact } from '@brysonandrew/contact/ContactProvider';
import { Footer } from '@brysonandrew/contact/footer';
import {
  TUseForm,
  useForm,
} from '@brysonandrew/contact/form/useForm';
import { motion } from 'framer-motion';
import { FC, useRef } from 'react';
import {
  IntersectionOptions,
  useInView,
} from 'react-intersection-observer';

export type TFormChildrenProps = Pick<
  TUseForm,
  'isDisabled' | 'inputHandlers'
>;
type TProps = TFooterInfoProps & {
  children(props: TFormChildrenProps): TChildrenElement;
};
export const Form: FC<TProps> = ({
  footerInfo,
  children,
}) => {
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
      {footerInfo && <Footer {...footerInfo} />}
    </motion.form>
  );
};
