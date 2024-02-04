import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Input } from '..';
import { TTextareaMotionProps } from '@brysonandrew/config-types/dom';
import { Autosize } from './autosize';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';
import { TBaseInputProps } from '@brysonandrew/contact/config/types';
import { TFormChildrenProps } from '@brysonandrew/contact/form';

type TProps = TFormChildrenProps &
  TTextareaMotionProps &
  TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  isDisabled,
  inputHandlers,
  ...props
}) => {
  return (
    <Input<HTMLTextAreaElement> name={name}>
      {({ input, resolveRef, ...inputProps }) => (
        <Autosize textarea={input} {...inputProps}>
          {() => (
            <motion.textarea
              layout
              transition={{ duration: 0 }}
              ref={resolveRef}
              className='_contact_input-textarea'
              autoComplete='off'
              rows={1}
              name={name}
              disabled={isDisabled}
              {...resolveInteractiveLabels(name)}
              {...inputHandlers}
              {...props}
              {...inputProps}
            />
          )}
        </Autosize>
      )}
    </Input>
  );
};
