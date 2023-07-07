import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Metal } from '@components/metal';
import { Input as Select } from '@components/select/Input';
import {
  LABEL_CLASS,
  INPUT_CLASS,
  TBaseInputProps,
} from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Glow } from '@components/glow';
import { PARENT_HOVER_GLOW_PROPS } from '@constants/colors';

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<'input'> & TBaseInputProps;
export const Text: FC<TProps> = ({
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
    <Root className={clsx(LABEL_CLASS)} {...PARENT_HOVER_GLOW_PROPS}>
      <Glow />
      <Metal />
      <div className='pt-1 w-full md:w-auto'>
        <Name title={title} isFocused={isFocused} />
      </div>
      <Input
        className={clsx(INPUT_CLASS)}
        type='text'
        autoComplete='off'
        name={name}
        value={value}
        autoFocus={isFocused}
        {...props}
      />
      {isFocused && <Select key={name} />}
    </Root>
  );
};
