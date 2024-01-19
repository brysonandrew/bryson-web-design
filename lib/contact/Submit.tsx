import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { useContact } from '@brysonandrew/contact/context/useContact';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import {
  EFFECT_ANIMATE_TRANSITION,
  resolveParentAnimateConfig,
} from '@brysonandrew/animation/components/filter-animate/utils';
import { BIGGER_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { useApp } from '@brysonandrew/context/app/useApp';
import { resolveButtonValue } from './utils/resolveButtonValue';

const Root = styled(motion.label)``;
const Input = styled.input``;
const Text = styled(motion.h4)``;

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { BORDER_RADIUS, TextureGlow } = useApp();
  const { isHover, handlers } = useHoverKey(
    BIGGER_CURSOR_KEY,
    'form-submit',
  );
  const { status } = useContact();
  const ref = useRef<HTMLLabelElement>(null);
  const title = resolveButtonValue(status);
  const handleMoveSound = useMoveSound();

  useEffect(() => {
    if (status === 'sent' && ref.current !== null) {
      ref.current.scrollIntoView({ block: 'center' });
    }
  }, [status]);

  return (
    <Root
      ref={ref}
      className={clsx('relative p-0.5 w-full', [
        isDisabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer',
      ])}
      layout
      onTap={isDisabled ? () => null : handleMoveSound}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...handlers}
    >
      <TextureGlow />
      <Input
        className='absolute inset-0 pointer-events-none opacity-0'
        type='submit'
        disabled={isDisabled}
      />
      <Text
        className='center relative py-2 title-main pointer-events-none'
        transition={EFFECT_ANIMATE_TRANSITION}
        style={{
          letterSpacing: '0.00675em',
        }}
        variants={{
          animate: {
            letterSpacing: '0.00675em',
          },
          hover: {
            letterSpacing: '0.25em',
          },
        }}
      >
        {title}
      </Text>
    </Root>
  );
};
