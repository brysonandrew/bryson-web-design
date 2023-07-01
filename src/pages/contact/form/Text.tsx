import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fill } from '@components/metal/Fill';
import { Input as Select } from '@components/select/Input';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import { LABEL_CLASS, INPUT_CLASS } from '../config';
import { Name } from './name';

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<'input'> & {
  title: string;
  isFocused: boolean;
};
export const Text: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => (
  <Root
    className={clsx(LABEL_CLASS, [
      isFocused ? 'z-50' : 'z-0',
    ])}
    {...HOVER_TEAL_GLOW_PROPS_SM}
  >
    <Fill />
    <div className='pt-1'>
      <Name title={title} isFocused={isFocused} />
    </div>
    <Input
      className={clsx(INPUT_CLASS)}
      type='text'
      autoComplete='off'
      {...props}
    />
    {isFocused && <Select key={title} />}
  </Root>
);
