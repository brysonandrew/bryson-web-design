import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { useMoveSound } from '@lib/hooks/sounds/useMoveSound';
import { useContact } from '@lib/contact/context/useContact';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
  resolveParentAnimateConfig,
} from '@lib/animation/components/filter-animate/utils';
import { BIGGER_CURSOR_KEY } from '@lib/cursor/switch/config';
import { useApp } from '@lib/context/app/useApp';
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
        className={clsx(
          'absolute inset-0 pointer-events-none opacity-0',
        )}
        type='submit'
        disabled={isDisabled}
      />
      <Text
        className={clsx(
          'center relative text-2xl italic uppercase py-2 pointer-events-none',
        )}
        variants={{
          animate: {
            letterSpacing: '2px',
            transition: EFFECT_ANIMATE_TRANSITION,
          },
          hover: {
            letterSpacing: '4px',
            transition: EFFECT_HOVER_TRANSITION,
          },
        }}
      >
        {title}
      </Text>
    </Root>
  );
};
