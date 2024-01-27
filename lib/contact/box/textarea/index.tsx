import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../../config/types';
import { Box } from '..';
import { TTextareaMotionProps } from '@brysonandrew/types/dom';
import { Autosize } from './autosize';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';

type TProps = TTextareaMotionProps & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  return (
    <Box<HTMLTextAreaElement>
      name={name}
      isDisabled={disabled}
    >
      {({ setInput, inputProps, input }) => (
        <Autosize textarea={input} {...inputProps}>
          {() => (
            <motion.textarea
              layout
              transition={{ duration: 0 }}
              ref={(instance) => {
                if (instance && !input) {
                  setInput(instance);
                }
              }}
              className='input-textarea'
              autoComplete='off'
              rows={1}
              name={name}
              disabled={disabled}
              {...resolveInteractiveLabels(name)}
              {...inputProps}
              {...props}
            />
          )}
        </Autosize>
      )}
    </Box>
  );
};
