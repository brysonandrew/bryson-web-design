import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveButtonValue } from '../config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { Fill } from '@components/metal/Fill';
import {
  HOVER_TEAL_GLOW_PROPS_SM,
  HOVER_TEAL_OUTER_GLOW_PROPS_SM,
} from '@pages/index/constants';
import { useContext } from '@state/Context';

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)`
  background-color: transparent;
`;
const Text = styled(motion.h4)`
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(153, 204, 255, 0.9);
`;

export const Submit: FC = () => {
  const { contact } = useContext();
  const isDisabled = contact.status !== 'idle';
  const handleMoveSound = useMoveSound();
  const title = resolveButtonValue(contact.status);

  return (
    <Root
      className={clsx(
        'relative p-0.5 flex w-full shadow-teal-02-sm',
        [
          isDisabled
            ? 'cursor-not-allowed'
            : 'cursor-pointer',
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...HOVER_TEAL_GLOW_PROPS_SM}
    >
      <Fill classValue='pointer-events-none' />
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
            'flex justify-center relative capitalise py-2 text-teal text-2xl italic pointer-events-none',
          )}
          variants={{
            animate: {
              letterSpacing: '4px',
              transition:
                HOVER_TEAL_OUTER_GLOW_PROPS_SM.variants
                  .animate.transition,
            },
            hover: {
              letterSpacing: '8px',
              transition:
                HOVER_TEAL_OUTER_GLOW_PROPS_SM.variants
                  .hover.transition,
            },
          }}
        >
          {title}
        </Text>
      </Decoration>
    </Root>
  );
};
