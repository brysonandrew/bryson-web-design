import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { resolveButtonValue } from '../config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useContext } from '@state/Context';
import { MetalGlow } from '@components/metal/MetalGlow';
import { useHoverKey } from '@hooks/useHoverKey';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
} from '@utils/effects';

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;
const Text = styled(motion.h4)``;

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { isHover, handlers } = useHoverKey(
    'bigger',
    'form-submit',
  );
  const {
    contact: { status },
    darkMode: { isDarkMode },
  } = useContext();
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
      className={clsx(
        'relative p-0.5 w-full label-background',
        [
          isDisabled
            ? 'glow-disabled cursor-not-allowed'
            : 'glow-interactive cursor-pointer',
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...(isDisabled ? {} : PARENT_GLOW_PROPS)}
      {...handlers}
    >
      <MetalGlow color={isDarkMode ? 'white' : 'gray-3'} />
      <Input
        className={clsx(
          'absolute inset-0 pointer-events-none opacity-0',
        )}
        type='submit'
        disabled={isDisabled}
      />
      <Text
        className={clsx(
          'center relative text-color text-color-stroke text-2xl italic py-2 pointer-events-none',
        )}
        variants={{
          animate: {
            letterSpacing: '4px',
            transition: EFFECT_ANIMATE_TRANSITION,
          },
          hover: {
            letterSpacing: '8px',
            transition: EFFECT_HOVER_TRANSITION,
          },
        }}
      >
        {title}
      </Text>
    </Root>
  );
};
