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
import { Space3 } from '@components/spaces/Space3';
import { Text } from './Text';
import { Textarea } from './Textarea';
import { Space6 } from '@components/spaces/Space6';
import { useCurrProject } from '@hooks/params/useCurrProject';

const Root = styled(motion.form)``;

export const Form = () => {
  const ref = useRef<HTMLFormElement | null>(null);
  const currProject = useCurrProject();
  const { isDisabled, onSend, inputHandlers } = useForm({
    element: ref.current,
  });
  useAutoFocus(isDisabled || Boolean(currProject));

  return (
    <Root
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
        initial={false}
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
        <Space3 />
        <Text
          disabled={isDisabled}
          type='email'
          name='email'
          placeholder=''
          required
          {...inputHandlers}
        />
        <Space3 />
        <Textarea
          name='message'
          disabled={isDisabled}
          rows={4}
          cols={50}
          required
          {...inputHandlers}
        />
      </motion.div>
      <Space6 />
      <Submit isDisabled={isDisabled} />
    </Root>
  );
};
