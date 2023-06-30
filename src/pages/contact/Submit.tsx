import styled from '@emotion/styled';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TSendingState } from './config';
import { resolveButtonValue } from './config';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { Fill } from '@components/metal/Fill';
import { GlitchPorsalin } from '@components/text/glitch-porsalin';
import {
  HOVER_GLOW_PROPS,
  HOVER_GLOW_PROPS_SM,
} from '@pages/index/constants';
import { Border as Select } from '@components/select/Border';

const SUBMIT_ID = 'SUBMIT_ID';

const Root = styled(motion.label)``;
const Decoration = styled(motion.div)``;
const Input = styled(motion.input)`
  background-color: transparent;
`;
const Text = styled(motion.div)``;

type TProps = {
  sendingState: TSendingState;
};
export const Submit: FC<TProps> = ({ sendingState }) => {
  const { handlers, isSelected } =
    useSelectHandlers(SUBMIT_ID);
  const isDisabled = sendingState !== 'idle';
  const handleMoveSound = useMoveSound();
  const title = resolveButtonValue(sendingState);

  return (
    <Root
      className={clsx(
        'relative p-0.5 flex w-full shadow-baby-blue-02-sm',
        [
          isDisabled
            ? 'cursor-not-allowed'
            : 'cursor-pointer',
        ],
      )}
      onTap={isDisabled ? () => null : handleMoveSound}
      {...handlers}
      {...HOVER_GLOW_PROPS_SM}
    >
      {isSelected && <Select />}
      <Fill />
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
            'flex justify-center relative text-white py-2 pointer-events-none',
          )}
        >
          {isSelected ? (
            <>
              <GlitchPorsalin
                tag='h4'
                classValue='py-1'
                offset={0.1}
              >
                {title}
              </GlitchPorsalin>
            </>
          ) : (
            <h4>{title}</h4>
          )}
        </Text>
      </Decoration>
    </Root>
  );
};
