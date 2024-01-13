import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { resolveButtonValue } from '../config';
import { useMoveSound } from '@lib/hooks/sounds/useMoveSound';
import { useContact } from '@pages/index/contact/context';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { MetalGlow } from '@components/decoration/metal/MetalGlow';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
  resolveParentAnimateConfig,
} from '@lib/utils/effects';

const Root = styled(motion.label)``;
const Input = styled.input``;
const Text = styled(motion.h4)``;

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { isHover, handlers } = useHoverKey(
    'bigger',
    'form-submit',
  );
  const { status } = useContact();
  const { isDarkMode } = useDarkMode();
  const ref = useRef<HTMLLabelElement>(null);
  const title = resolveButtonValue(status);
  const handleMoveSound = useMoveSound();
  const borderRadiusClass = 'rounded';

  useEffect(() => {
    if (status === 'sent' && ref.current !== null) {
      ref.current.scrollIntoView({ block: 'center' });
    }
  }, [status]);

  return (
    <Root
      ref={ref}
      className={clsx(
        'relative p-0.5 w-full label-background',
        borderRadiusClass,
        [
          isDisabled
            ? 'cursor-not-allowed'
            : 'glow cursor-pointer',
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      {...handlers}
    >
      <MetalGlow
        classValue={borderRadiusClass}
        color={isDarkMode ? 'accent' : 'secondary'}
        drop={1}
      />
      <Input
        className={clsx(
          'absolute inset-0 pointer-events-none opacity-0',
        )}
        type='submit'
        disabled={isDisabled}
      />
      <Text
        className={clsx(
          'center relative text-g-tb text-2xl italic uppercase py-2 pointer-events-none',
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
