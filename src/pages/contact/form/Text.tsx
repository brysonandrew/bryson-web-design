import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../config';
import { Name } from './name';
import { Box } from './box';
import { useInput } from './useInput';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<'input'> & TBaseInputProps;
export const Text: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  const { ref, input, isEmpty, isFocused, ...inputProps } =
    useInput<HTMLInputElement>({ name });
  return (
    <Box
      name={name}
      isDisabled={disabled}
      isFocused={isFocused}
      isEmpty={isEmpty}
      input={input}
    >
      <div className='pt-1 w-full md:w-auto'>
        <Name title={name} />
      </div>
      <Input
        ref={ref}
        className='input-text'
        type='text'
        autoComplete='off'
        name={name}
        disabled={disabled}
        {...resolveInteractiveLabels(name)}
        {...inputProps}
        {...props}
      />
    </Box>
  );
};
