import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Metal } from '@components/metal';
import { Input as Select } from '@components/select/Input';
import {
  LABEL_CLASS,
  TBaseInputProps,
  TEXTAREA_INPUT_CLASS,
} from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Glow } from '@components/glow';
import { PARENT_HOVER_GLOW_PROPS } from '@constants/colors';

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
      className={clsx(LABEL_CLASS)}
      {...PARENT_HOVER_GLOW_PROPS}
    >
      <Glow />
      <Metal />
      <div className='pt-0.75 w-full md:w-auto'>
        <Name title={title} isFocused={isFocused} />
      </div>
      <div className={clsx('flex')}>
        <Input
          className={clsx(TEXTAREA_INPUT_CLASS)}
          autoComplete='off'
          name={name}
          value={value}
          autoFocus={isFocused}
          {...props}
        />
      </div>
      {isFocused && <Select key={name} />}
    </Root>
  );
};
