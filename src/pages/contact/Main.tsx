import { useRef, useState } from 'react';
import type {
  ChangeEvent,
  FormEvent,
  FocusEvent,
  FC,
} from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import emailjs from '@emailjs/browser';
import clsx from 'clsx';
import { Space2 } from '@components/spaces/Space2';
import { useFocusSound } from '@hooks/sounds/useFocusSound';
import { Text } from './Text';
import { Textarea } from './Textarea';
import type { TSendingState } from './config';
import { INPUT_CLASS, INIT_STATE } from './config';
import { Submit } from './Submit';
import { Space16 } from '@components/spaces/Space16';
import styled from '@emotion/styled';
import { Space4 } from '@components/spaces/Space4';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { WIDTH_CLASS } from '@constants/styles';

const Root = styled(motion.div)``;

const Form = styled(motion.form)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  const [focus, setFocus] = useState<string | null>(null);
  const [state, setState] = useState(INIT_STATE);
  const [sendingState, setSendingState] =
    useState<TSendingState>('idle');

  const ref = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (event: FormEvent) => {
    setSendingState('sending');
    event.preventDefault();

    if (ref.current === null) return;

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        ref.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );
      setSendingState('sent');
    } catch (error) {
      console.error(error);
      setSendingState('error');
    }
  };

  const handleFocus = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    setFocus(target.name);
  };

  const handleBlur = (
    event: FocusEvent<
      HTMLInputElement | HTMLTextAreaElement,
      Element
    >,
  ) => {
    const target = event.currentTarget;
    if (!target) return;
    if (focus === target.name) {
      setFocus(null);
    }
  };

  const handleChange = ({
    currentTarget: { name, value },
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const isDisabled = sendingState !== 'idle';
  const handleFocusSound = useFocusSound();

  const focusHandlers: Pick<
    HTMLMotionProps<'input'>,
    'onChange' | 'onBlur' | 'onFocus'
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  const textareaFocusHandlers: Pick<
    HTMLMotionProps<'textarea'>,
    'onChange' | 'onBlur' | 'onFocus'
  > = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange,
  };

  return (
    <Root className={clsx(WIDTH_CLASS)} style={style}>
      <Form
        className={clsx(
          'flex flex-col w-full my-0 mx-auto',
        )}
        ref={ref}
        onSubmit={isDisabled ? () => null : sendEmail}
      >
        <motion.div className='relative flex flex-col w-full'>
          <Text
            title='name'
            autoFocus
            className={clsx(INPUT_CLASS)}
            disabled={isDisabled}
            name='from_name'
            placeholder=''
            value={state.from_name}
            isFocused={'from_name' === focus}
            required
            {...focusHandlers}
          />
          <Space2 />
          <Text
            title='email'
            className={clsx(INPUT_CLASS)}
            disabled={isDisabled}
            type='email'
            name='from_email'
            placeholder=''
            value={state.from_email}
            isFocused={'from_email' === focus}
            required
            {...focusHandlers}
          />
          <Space2 />
          <Textarea
            title='message'
            name='message'
            disabled={isDisabled}
            style={{ marginTop: -6 }}
            value={state.message}
            rows={4}
            cols={50}
            isFocused={'message' === focus}
            required
            {...textareaFocusHandlers}
          />
        </motion.div>
        <Space4 />
        <Submit sendingState={sendingState} />
      </Form>
      <Space16 />
    </Root>
  );
};
