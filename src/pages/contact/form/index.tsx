import { Space2 } from '@components/spaces/Space2';
import { Text } from './Text';
import { Textarea } from './Textarea';
import { Space4 } from '@components/spaces/Space4';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Submit } from './Submit';
import { useRef } from 'react';
import { useForm } from './useForm';

const Root = styled(motion.form)``;

export const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);

  const { isDisabled, onSend, focusHandlers } = useForm({
    element: ref.current,
  });

  return (
    <Root
      className={clsx('flex flex-col w-full my-0 mx-auto')}
      ref={ref}
      onSubmit={isDisabled ? () => null : onSend}
    >
      <motion.div className='relative flex flex-col w-full'>
        <Text
          title='name'
          name='name'
          disabled={isDisabled}
          placeholder=''
          required
          {...focusHandlers}
        />
        <Space2 />
        <Text
          title='email'
          disabled={isDisabled}
          type='email'
          name='email'
          placeholder=''
          required
          {...focusHandlers}
        />
        <Space2 />
        <Textarea
          title='message'
          name='message'
          rows={4}
          cols={50}
          required
          {...focusHandlers}
        />
      </motion.div>
      <Space4 />
      <Submit />
    </Root>
  );
};
