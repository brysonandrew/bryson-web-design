import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fill } from '@components/metal/Fill';
import { Input as Select } from '@components/select/Input';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import {
  LABEL_CLASS,
  TBaseInputProps,
  TEXTAREA_INPUT_CLASS,
  TFormKey,
} from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  title,
  name,
  ...props
}) => {
  const {
    contact: { focusKey, form },
  } = useContext();
  const isFocused = focusKey === name;
  const value = form[name];
  return (
    <Root
      className={clsx(LABEL_CLASS, [
        isFocused ? 'z-50' : 'z-0',
      ])}
      {...HOVER_TEAL_GLOW_PROPS_SM}
    >
      <Fill />
      <div className='pt-0.75'>
        <Name title={title} isFocused={isFocused} />
      </div>
      <div className={clsx('flex w-full')}>
        <Input
          className={clsx(TEXTAREA_INPUT_CLASS)}
          autoComplete='off'
          name={name}
          value={value}
          autoFocus={isFocused}
          {...props}
        />
      </div>
      {isFocused && <Select />}
    </Root>
  );
};
