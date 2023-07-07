import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  TBaseInputProps,
  TEXTAREA_INPUT_CLASS,
} from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Box } from './Box';

const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  title,
  name,
  disabled,
  ...props
}) => {
  const {
    contact: { focusKey, form },
  } = useContext();
  const isFocused = focusKey === name;
  const value = form[name];

  return (
    <Box
      name={name}
      isFocused={isFocused}
      isDisabled={disabled}
    >
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
          disabled={disabled}
          {...props} 
        />
      </div>
    </Box>
  );
};
