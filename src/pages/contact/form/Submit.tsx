import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { resolveButtonValue } from '../config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useContext } from '@state/Context';
import {
  PARENT_GLOW_PROPS,
  GLOW_ANIMATE_TRANSITION,
  GLOW_HOVER_TRANSITION,
} from '@constants/colors';
import { MetalGlow } from '@components/metal/MetalGlow';

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)`
  background-color: transparent !important;
`;
const Text = styled(motion.h4)``;

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const {
    contact: { status },
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
        'relative p-0.5 flex w-full glow-interactive',
        [
          isDisabled
            ? clsx('cursor-not-allowed')
            : clsx('cursor-pointer'),
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...(isDisabled ? {} : PARENT_GLOW_PROPS)}
    >
      <MetalGlow />
      <Decoration
        className={clsx(
          'relative w-full pointer-events-none',
        )}
      >
        <Input
          className={clsx(
            'absolute inset-0 pointer-events-none opacity-0',
          )}
          type='submit'
          disabled={isDisabled}
        />
        <Text
          className={clsx(
            'center relative capitalise text-color text-color-stroke text-2xl italic py-2 pointer-events-none',
          )}
          variants={{
            animate: {
              letterSpacing: '4px',
              transition: GLOW_ANIMATE_TRANSITION,
            },
            hover: {
              letterSpacing: '8px',
              transition: GLOW_HOVER_TRANSITION,
            },
          }}
        >
          {title}
        </Text>
      </Decoration>
    </Root>
  );
};
