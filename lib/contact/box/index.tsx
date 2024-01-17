import styled from '@emotion/styled';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildren } from '@lib/types/dom';
import { Clear } from './Clear';
import {
  TFormKey,
  TInputElement,
} from '@lib/contact/config/types';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';
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
  const { Active, BORDER_RADIUS, TextureGlow } = useApp();
  const handleFocus = useFocus(input, isFocused);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    name,
  );

  return (
    <Root
      className={clsx(
        'relative column-start w-full p-2 md:flex-row',
      )}
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      {...handlers}
    >
      <TextureGlow />
      {isFocused && (
        <Active
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
