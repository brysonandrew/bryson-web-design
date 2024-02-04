import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Input } from '@brysonandrew/contact/form/input';
import { resolveInteractiveLabels } from '@brysonandrew/utils';
import { TFormChildrenProps } from '@brysonandrew/contact/form';
import { TBaseInputProps } from '@brysonandrew/contact/config/types';
import { TInputMotionProps } from '@brysonandrew/config-types';

type TProps = TFormChildrenProps &
  TInputMotionProps &
  TBaseInputProps;
export const Text: FC<TProps> = ({
  name,
  isDisabled,
  inputHandlers,
  ...props
}) => {
  return (
    <Input<HTMLInputElement> name={name}>
      {({ resolveRef, ...inputProps }) => (
        <motion.input
          ref={resolveRef}
          className='_contact_input-text'
          type='text'
          autoComplete='off'
          name={name}
          disabled={isDisabled}
          {...resolveInteractiveLabels(name)}
          {...inputHandlers}
          {...props}
          {...inputProps}
        />
      )}
    </Input>
  );
};
