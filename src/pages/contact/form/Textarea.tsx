import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../config';
import { Name } from './name';
import { Box } from './box';
import { useInput } from './useInput';

const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  const { ref, input, isEmpty, isFocused, value } =
    useInput<HTMLTextAreaElement>({ name });

  return (
    <Box
      name={name}
      isFocused={isFocused}
      isDisabled={disabled}
      isEmpty={isEmpty}
      input={input}
    >
      <div className='pt-0.75 w-full md:w-auto'>
        <Name title={name} isFocused={isFocused} />
      </div>
      <div className={'flex grow'}>
        <Input
          ref={ref}
          className='input-textarea'
          autoComplete='off'
          name={name}
          value={value}
          disabled={disabled}
          {...props}
        />
      </div>
    </Box>
  );
};
