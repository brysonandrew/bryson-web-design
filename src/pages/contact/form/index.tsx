import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Submit } from './Submit';
import { useRef } from 'react';
import { useForm } from './hooks/useForm';
import { useAutoFocus } from './hooks/useAutoFocus';
import {
  ACTIVE,
  DISABLED,
} from '@components/filters/presets';
import { Space2 } from '@components/spaces/Space2';
import { Text } from './Text';
import { Textarea } from './Textarea';
import { Space4 } from '@components/spaces/Space4';
import { useContext } from '@state/Context';

const Root = styled(motion.form)``;

export const Form = () => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const ref = useRef<HTMLFormElement | null>(null);
  const { isDisabled, onSend, inputHandlers } = useForm({
    element: ref.current,
  });
  useAutoFocus(isDisabled);

  return (
    <Root
      key={isDarkMode ? 'dark' : 'light'}
      className='flex flex-col mt-1 w-full'
      ref={ref}
      onSubmit={(event) => {
        if (!isDisabled) {
          onSend(event);
        }
      }}
    >
      <motion.div
        className='relative flex flex-col w-full'
        animate={{
          filter: isDisabled ? DISABLED : ACTIVE,
        }}
      >
        <Text
          name='name'
          disabled={isDisabled}
          placeholder=''
          required
          {...inputHandlers}
        />
        <Space2 />
        <Text
          disabled={isDisabled}
          type='email'
          name='email'
          placeholder=''
          required
          {...inputHandlers}
        />
        <Space2 />
        <Textarea
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
