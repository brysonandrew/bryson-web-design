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

const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
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
      isFocused={isFocused}
      isDisabled={disabled}
    >
      <div className='pt-0.75 w-full md:w-auto'>
        <Name title={name} isFocused={isFocused} />
      </div>
      <div className={clsx('flex')}>
        <Input
          className='input-textarea'
          autoComplete='off'
          name={name}
          value={value}
          autoFocus={isFocused}
          disabled={disabled}
          {...props}
        />
      </div>
    </Box>
  );
};
