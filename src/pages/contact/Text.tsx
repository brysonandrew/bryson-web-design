import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Gradient } from './Gradient';
import { TextName } from './TextName';
import { LABEL_CLASS } from './config';
import { Fill } from '@components/metal/Fill';
import { Input as Select } from '@components/select/Input';
import { BASIC_VARIANTS } from '@constants/animation';

const Root = styled(motion.label)``;
const Input = styled(motion.input)`
  background-color: transparent;
`;

type TProps = HTMLMotionProps<'input'> & {
  title: string;
  isFocused: boolean;
};
export const Text: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => (
  <Root className={clsx(LABEL_CLASS)} {...BASIC_VARIANTS}>
    <Fill />
    {isFocused && <Select key={title} />}
    <div
      className={clsx(
        'relative flex items-center bg-black-dark',
      )}
    >
      <TextName title={title} isFocused={isFocused} />
      <Input {...props} type='text' autoComplete='off' />
    </div>
  </Root>
);
