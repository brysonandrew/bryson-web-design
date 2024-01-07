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
import { P3 } from '@components/space/P3';
import { Text } from './Text';
import { Textarea } from './Textarea';
import { P6 } from '@components/space/P6';
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
      className='column-start mt-1'
      initial={false}
      animate={{
        filter: isDisabled ? DISABLED : ACTIVE,
        opacity: isDisabled ? 0.6 : 1,
      }}
      ref={ref}
      onSubmit={(event) => {
        if (!isDisabled) {
          onSend(event);
        }
      }}
    >
      <Text
        name='name'
        disabled={isDisabled}
        placeholder=''
        required
        {...inputHandlers}
      />
      <P3 />
      <Text
        disabled={isDisabled}
        type='email'
        name='email'
        placeholder=''
        required
        {...inputHandlers}
      /> 
      <P3 />
      <Textarea
        name='message'
        disabled={isDisabled}
        rows={4}
        cols={50}
        required
        {...inputHandlers}
      />
      <P6 />
      <Submit isDisabled={isDisabled} />
    </Root>
  );
};
