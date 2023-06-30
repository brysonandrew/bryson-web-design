import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { TextName } from './TextName';
import {
  LABEL_CLASS,
  TEXTAREA_INPUT_CLASS,
} from './config';
import { Fill } from '@components/metal/Fill';
import { Input as Select } from '@components/select/Input';

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)`
  background-color: transparent;
`;

type TProps = HTMLMotionProps<'textarea'> & {
  title: string;
  isFocused: boolean;
};
export const Textarea: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => (
  <Root
    className={clsx(LABEL_CLASS)}
    animate='animate'
    whileHover='hover'
  >
    <Fill />
    {isFocused && <Select key={title} />}
    <div
      className={clsx(
        'relative flex items-start bg-black-dark',
      )}
    >
      <div className='pt-0.25'>
        <TextName title={title} isFocused={isFocused} />
      </div>
      <div className={clsx('flex w-full')}>
        <Input
          className={clsx(TEXTAREA_INPUT_CLASS)}
          autoComplete='off'
          {...props}
        />
      </div>
    </div>
  </Root>
);
