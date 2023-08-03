import styled from '@emotion/styled';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Input as Select } from '@components/select/Input';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { TChildren } from '@t/index';
import { useHover } from '@hooks/useHover';
import { Clear } from './Clear';
import { MetalGlow } from '@components/metal/MetalGlow';
import {
  TFormKey,
  TInputElement,
} from '@pages/contact/config';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@hooks/useHoverKey';

const Root = styled(motion.label)``;

type TProps = {
  name: TFormKey;
  isFocused: boolean;
  isDisabled?: boolean;
  isEmpty?: boolean;
  input: TInputElement | null;
  children: TChildren;
};
export const Box: FC<TProps> = ({
  name,
  isFocused,
  isDisabled,
  isEmpty,
  input,
  children,
}) => {
  const handleFocus = useFocus(input, isFocused);
  const { isHover, ...handlers } = useHoverKey('big', name);

  return (
    <Root
      className={clsx('relative input-label', [
        isDisabled ? 'glow-disabled' : 'glow-interactive',
      ])}
      {...(isDisabled ? {} : PARENT_GLOW_PROPS)}
      {...handlers}
    >
      <MetalGlow />
      {isFocused && <Select key={name} />}
      {children}
      <AnimatePresence>
        {isEmpty && (
          <Clear
            name={name}
            isReady={Boolean(isHover)}
            onFocus={handleFocus}
          />
        )}
      </AnimatePresence>
    </Root>
  );
};
