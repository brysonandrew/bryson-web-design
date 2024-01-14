import styled from '@emotion/styled';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildren } from '@lib/types/dom';
import { Clear } from './Clear';
import { MetalGlow } from '@components/decoration/metal/MetalGlow';
import {
  TFormKey,
  TInputElement,
} from '@pages/contact/config';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { Mark } from '@components/decoration/mark';
import { resolveParentAnimateConfig } from '@lib/utils/effect';
import { BIG_CURSOR_KEY } from '@lib/components/cursor/switch/config';
import { useApp } from '@lib/context/app/useApp';

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
  const { BackgroundGlow1 } = useApp();
  const handleFocus = useFocus(input, isFocused);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    name,
  );
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
      <BackgroundGlow1 />
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
