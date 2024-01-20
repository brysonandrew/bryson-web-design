import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Submit } from './box/Submit';
import { FC, useRef } from 'react';
import { useForm } from './hooks/useForm';
import { useAutoFocus } from './hooks/useAutoFocus';
import { Text } from './box/Text';
import { Textarea } from './box/textarea';

const Root = styled(motion.form)``;

type TProps = { isDisabled?: boolean };
export const Contact: FC<TProps> = ({
  isDisabled: _isDisabled,
}) => {
  const ref = useRef<HTMLFormElement | null>(null);
  const { isDisabled, onSend, inputHandlers } = useForm({
    element: ref.current,
  });
  useAutoFocus(_isDisabled ?? isDisabled);

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

export * from "./box/Clear";
export * from "./box/Name";
export * from "./box/Shell";
export * from "./box/Submit";
export * from "./box/Text";
export * from "./box";
export * from "./context/Consumer";
export * from "./context/Provider";
export * from "./context/constants";
export * from "./context/types";
export * from "./context/useContact";
export * from "./utils/resolveButtonValue";
export * from "./hooks/useAutoFocus";
export * from "./hooks/useFocus";
export * from "./hooks/useForm";
export * from "./hooks/useInput";
export * from "./box/textarea";
export * from "./box/textarea/autosize";
export * from "./box/textarea/autosize/useAutosize";