import styled from '@emotion/styled';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildren } from '@t/index';
import { Clear } from './Clear';
import { MetalGlow } from '@components/metal/MetalGlow';
import {
  TFormKey,
  TInputElement,
} from '@pages/contact/config';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { Mark } from '@components/mark';
import { resolveParentAnimateConfig } from '@utils/effects';

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
  const { isHover, handlers } = useHoverKey('big', name);
  const borderRadiusClass = 'rounded';

  return (
    <Root
      className={clsx('relative input-label', [
        isDisabled ? '' : 'glow',
        borderRadiusClass,
      ])}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      {...handlers}
    >
      <MetalGlow
        classValue={borderRadiusClass}
        color='accent'
        drop={1}
      />
      {isFocused && (
        <Mark
          layoutId='CONTACT_FORM_INPUT_LAYOUT_ID'
          classValue='z-50'
        />
      )}
      {children}
      <AnimatePresence>
        {isEmpty && (
          <Clear
            key={name}
            name={name}
            isReady={Boolean(isHover)}
            onFocus={handleFocus}
          />
        )}
      </AnimatePresence>
    </Root>
  );
};
