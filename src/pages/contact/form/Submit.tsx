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
  DISABLED_BOX_SHADOW,
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
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

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { contact } = useContext();
  const title = resolveButtonValue(contact.status);

  const handleMoveSound = useMoveSound();

  return (
    <Root
      className={clsx(
        'relative p-0.5 flex w-full',
        GLOW_BOX_SHADOW,
        [
          isDisabled
            ? clsx('cursor-not-allowed')
            : clsx('cursor-pointer'),
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...(isDisabled ? {} : PARENT_GLOW_PROPS)}
    >
      <Glow drop={2}>
        <Metal classValue='pointer-events-none' />
      </Glow>
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
