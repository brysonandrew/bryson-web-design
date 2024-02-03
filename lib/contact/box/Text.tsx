import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../config/types';
import { Box } from '.';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';
import { TInputMotionProps } from '@brysonandrew/config/types/dom';

type TProps = TInputMotionProps & TBaseInputProps;
export const Text: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  return (
    <Box<HTMLInputElement>
      name={name}
      isDisabled={disabled}
    >
      {({ input, setInput, inputProps }) => (
        <motion.input
          ref={(instance) => {
            if (instance && !input) {
              setInput(instance);
            }
          }}
          className='_contact_input-text'
          type='text'
          autoComplete='off'
          name={name}
          disabled={disabled}
          {...resolveInteractiveLabels(name)}
          {...props}
          {...inputProps}
        />
      )}
    </Box>
  );
};
