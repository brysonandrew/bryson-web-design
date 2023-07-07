import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { INPUT_CLASS, TBaseInputProps } from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';
import { Box } from './Box';

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
    <Box name={name} isFocused={isFocused}>
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
    </Box>
  );
};
