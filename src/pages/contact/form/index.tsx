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
import { useAutoFocus } from './useAutoFocus';
import { resolveFilter } from '@pages/index/build/images/hooks/resolveFilter';

const Root = styled(motion.form)``;

export const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const { isDisabled, onSend, inputHandlers } = useForm({
    element: ref.current,
  });
  useAutoFocus(isDisabled);

  return (
    <Root
      className={clsx('flex flex-col mt-1 w-full')}
      ref={ref}
      onSubmit={isDisabled ? () => null : onSend}
    >
      <motion.div
        className='relative flex flex-col w-full'
        animate={{
          filter: resolveFilter({
            blur: 0,
            brightness: isDisabled ? 60 : 110,
            grayscale: isDisabled ? 60 : 0,
          }),
        }}
      >
        <Text
          title='name'
          name='name'
          disabled={isDisabled}
          placeholder=''
          required
          {...inputHandlers}
        />
        <Space2 />
        <Text
          title='email'
          disabled={isDisabled}
          type='email'
          name='email'
          placeholder=''
          required
          {...inputHandlers}
        />
        <Space2 />
        <Textarea
          title='message'
          name='message'
          disabled={isDisabled}
          rows={4}
          cols={50}
          required
          {...inputHandlers}
        />
      </motion.div>
      <Space4 />
      <Submit isDisabled={isDisabled} />
    </Root>
  );
};
