import styled from '@emotion/styled';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { TBaseChildren } from '@brysonandrew/lib/types/dom';
import { Clear } from './Clear';
import { TFormKey } from '@brysonandrew/lib/contact/context/types';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@brysonandrew/lib/animation/components/filter-animate/utils';
import { BIG_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';
import { useApp } from '@brysonandrew/lib/context/app/useApp';
import { MOTION_CONFIG } from '@brysonandrew/lib/animation/constants';
import { CONTACT_FORM_INPUT_LAYOUT_ID } from '../context/constants';

const Root = styled(motion.label)``;

export type TShellProps<T extends HTMLElement> = {
  name: TFormKey;
  isFocused: boolean;
  isDisabled?: boolean;
  isEmpty?: boolean;
  input: T | null;
  children: TBaseChildren;
};
export const Shell = <T extends HTMLElement>({
  name,
  isFocused,
  isDisabled,
  isEmpty,
  input,
  children,
}: TShellProps<T>) => {
  const { Active, BORDER_RADIUS, TextureGlow } = useApp();
  const handleFocus = useFocus<T>(input, isFocused);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    name,
  );

  return (
    <Root
      className={clsx(
        'relative column-start w-full p-2 md:flex-row',
      )}
      layout
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      {...handlers}
    >
      <TextureGlow layout {...MOTION_CONFIG} />
      {isFocused && (
        <Active
          layoutId={CONTACT_FORM_INPUT_LAYOUT_ID}
          classValue='z-50'
        />
      )}
      {children}
      <AnimatePresence>
        {isEmpty && (
          <Clear
            title={`Clear ${name}`}
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
