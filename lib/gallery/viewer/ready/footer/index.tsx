import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Core } from './core';
import { TBaseProps } from '@brysonandrew/gallery';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import {
  DURATION,
  PRESENCE_UP_Y,
  TRANSITION_04_EASEIN_008,
} from '@brysonandrew/animation';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { LIGHT, Back } = useApp();
  const { handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'footer',
  );
  const Background = LIGHT?.Back ?? Back;
  return (
    <Root
      className='relative flex justify-center w-full z-10'
      transition={TRANSITION_04_EASEIN_008}
      {...PRESENCE_UP_Y}
      {...handlers}
    >
      <Background />
      <Core {...props} />
    </Root>
  );
};
