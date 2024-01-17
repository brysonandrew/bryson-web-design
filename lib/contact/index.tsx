import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Submit } from './Submit';
import { useRef } from 'react';
import { useForm } from './hooks/useForm';
import { useAutoFocus } from './hooks/useAutoFocus';
import { P3 } from '@lib/components/layout/space/P3';
import { Text } from './Text';
import { Textarea } from './textarea';
import { P6 } from '@lib/components/layout/space/P6';
import { useCurrProject } from '@lib/gallery/viewer/hooks/params/useCurrProject';

const Root = styled(motion.form)``;

export const Contact = () => {
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
        placeholder=''
        disabled={isDisabled}
        required
        {...inputHandlers}
      />
      <P6 />
      <Submit isDisabled={isDisabled} />
    </Root>
  );
};
