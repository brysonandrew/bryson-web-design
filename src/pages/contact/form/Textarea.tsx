import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { TBaseInputProps } from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Box } from './box';

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

  const value = form[name];
  const isEmpty = Boolean(value);

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
