import { Submit } from './form/input/Submit';
import { FC } from 'react';
import { Text } from './form/input/Text';
import { Textarea } from './form/input/textarea';
import { Footer } from './footer';
import {
  Form,
  TFormChildrenProps,
} from '@brysonandrew/contact/form';
import { TFooterInfoProps } from '@brysonandrew/contact/config/types';
import { motion } from 'framer-motion';

type TProps = TFooterInfoProps;
export const Contact: FC<TProps> = ({ footerInfo }) => {
  return (
    <Form>
      {(props: TFormChildrenProps) => (
        <>
          <div className='_contact_inputs'>
            <Text
              name='name'
              placeholder=''
              required
              {...props}
            />
            <Text
              type='email'
              name='email'
              placeholder=''
              required
              {...props}
            />
            <Textarea
              name='message'
              placeholder=''
              required
              {...props}
            />
          </div>
          <Submit isDisabled={props.isDisabled} />
          {footerInfo && (
            <motion.footer
              layout
              className='_contact_footer'
            >
              <Footer {...footerInfo} />
            </motion.footer>
          )}
        </>
      )}
    </Form>
  );
};

export * from './ContactProvider';
export * from './config/constants';
export * from './config/types';
export * from './footer';
export * from './form';
export * from './form/useForm';
export * from './variants/base';
export * from './variants/glow';
export * from './variants/minimalist';
export * from './variants/prefixContact';
export * from './form/input/Clear';
export * from './form/input/Name';
export * from './form/input/Submit';
export * from './form/input/Text';
export * from './form/input';
export * from './form/input/useFocus';
export * from './utils/resolveButtonValue';
export * from './form/input/textarea';
export * from './form/input/textarea/autosize';
export * from './form/input/textarea/autosize/useAutosize';
export * from './list/Item';
