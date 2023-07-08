import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { TBaseInputProps } from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Box } from './Box';
import { useFocus } from './hooks/useFocus';

const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<'input'> & TBaseInputProps;
export const Text: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const input = ref.current;
  const {
    contact: { focusKey, form },
  } = useContext();
  const isFocused = focusKey === name;
  useFocus(input, isFocused);

  const value = form[name];

  return (
    <Box
      name={name}
      isDisabled={disabled}
      isFocused={isFocused}
    >
      <div className='pt-1 w-full md:w-auto'>
        <Name title={name} isFocused={isFocused} />
      </div>
      <Input
        ref={ref}
        className='input-text'
        type='text'
        autoComplete='off'
        name={name}
        value={value}
        disabled={disabled}
        {...props}
      />
    </Box>
  );
};
