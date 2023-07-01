import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TSendingState } from './config';
import { resolveButtonValue } from './config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { Fill } from '@components/metal/Fill';
import COLORS from '@windi/config-colors.json';
import { HOVER_TEAL_OUTER_GLOW_PROPS_SM } from '@pages/index/constants';
import { BASIC_VARIANTS } from '@constants/animation';

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)`
  background-color: transparent;
`;
const Text = styled(motion.h4)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(153, 204, 255, 0.9);
`;

type TProps = {
  sendingState: TSendingState;
};
export const Submit: FC<TProps> = ({ sendingState }) => {
  const isDisabled = sendingState !== 'idle';
  const handleMoveSound = useMoveSound();
  const title = resolveButtonValue(sendingState);

  return (
    <Root
      className={clsx(
        'relative p-0.5 flex w-full shadow-white-01-sm',
        [
          isDisabled
            ? 'cursor-not-allowed'
            : 'cursor-pointer',
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...BASIC_VARIANTS}
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
            'flex justify-center relative uppercase py-2 text-lg italic pointer-events-none',
          )}
          variants={{
            animate: {
              color: COLORS['black'],
              letterSpacing: '1px',
              transition:
                HOVER_TEAL_OUTER_GLOW_PROPS_SM.variants
                  .animate.transition,
            },
            hover: {
              color: COLORS['teal'],
              letterSpacing: '4px',
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
