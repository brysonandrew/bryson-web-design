import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveButtonValue } from '../config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useContext } from '@state/Context';
import { Metal } from '@components/metal';
import { Glow } from '@components/glow';
import {
  PARENT_HOVER_GLOW_PROPS,
  TEAL_GLOW_ANIMATE_TRANSITION,
  TEAL_GLOW_HOVER_TRANSITION,
} from '@constants/colors';

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)`
  background-color: transparent !important;
`;
const Text = styled(motion.h4)`
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(153, 204, 255, 0.9);
`;

export const Submit: FC = () => {
  const { contact } = useContext();
  const isDisabled = contact.status !== 'idle';
  const title = resolveButtonValue(contact.status);

  const handleMoveSound = useMoveSound();

  return (
    <Root
      className={clsx('relative p-0.5 flex w-full', [
        isDisabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer',
      ])}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...PARENT_HOVER_GLOW_PROPS}
    >
      <Glow />
      <Metal classValue='pointer-events-none' />
      <Decoration
        className={clsx(
          'relative w-full pointer-events-none',
        )}
      >
        <Input
          className={clsx(
            'absolute inset-0 pointer-events-none',
          )}
          type='submit'
          disabled={isDisabled}
        />
        <Text
          className={clsx(
            'flex justify-center relative capitalise text-teal text-2xl italic py-2 pointer-events-none',
          )}
          variants={{
            animate: {
              letterSpacing: '4px',
              transition: TEAL_GLOW_ANIMATE_TRANSITION,
            },
            hover: {
              letterSpacing: '8px',
              transition: TEAL_GLOW_HOVER_TRANSITION,
            },
          }}
        >
          {title}
        </Text>
      </Decoration>
    </Root>
  );
};
