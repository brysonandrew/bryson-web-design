import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Submit } from './Submit';
import React, { useRef } from 'react';
import { useForm } from './hooks/useForm';
import { useAutoFocus } from './hooks/useAutoFocus';
import { Text } from './Text';
import { Textarea } from './textarea';

const Root = styled(motion.form)``;

export const Contact = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const { isDisabled, onSend, inputHandlers } = useForm({
    element: ref.current,
  });
  useAutoFocus(isDisabled);

  return (
    <Root
      className='column-stretch gap-box-2 mt-1'
      initial={false}
      ref={ref}
      onSubmit={(event) => {
        if (!isDisabled) {
          onSend(event);
        }
      }}
    >
      <div className='column-stretch gap-box'>
        <Text
          name='name'
          disabled={isDisabled}
          placeholder=''
          required
          {...inputHandlers}
        />
        <Text
          disabled={isDisabled}
          type='email'
          name='email'
          placeholder=''
          required
          {...inputHandlers}
        />
        <Textarea
          name='message'
          placeholder=''
          disabled={isDisabled}
          required
          {...inputHandlers}
        />
      </div>
      <Submit isDisabled={isDisabled} />
    </Root>
  );
};
