import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { memo, type FC } from 'react';
import { Metal } from '@components/metal';
import { Input as Select } from '@components/select/Input';
import { resolveTealGlow } from '@constants/colors';
import {
  LABEL_CLASS,
  INPUT_CLASS,
  TBaseInputProps,
} from '../config';
import { Name } from './name';
import { useContext } from '@state/Context';

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<'input'> & TBaseInputProps;
export const Text: FC<TProps> = memo(
  ({ title, name, ...props }) => {
    const {
      contact: { focusKey, form },
    } = useContext();
    const isFocused = focusKey === name;
    const value = form[name];

    const rootPropsWithTealGlow = resolveTealGlow({
      classValue: clsx(LABEL_CLASS),
    });

    return (
      <Root {...rootPropsWithTealGlow}>
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
  },
);
