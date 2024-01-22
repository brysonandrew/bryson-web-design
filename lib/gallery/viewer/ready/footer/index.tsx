import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  DURATION,
  PRESENCE_Y,
} from '@brysonandrew/animation/config/constants';
import { Core } from './core';
import { TBaseProps } from '../types';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { useApp } from '@brysonandrew/app';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { Back } = useApp();
  const { handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'footer',
  );
  return (
    <Root
      className='relative flex justify-center w-full z-10'
      transition={{
        ease: 'easeIn',
        duration: DURATION,
        delay: 0.2,
      }}
      {...PRESENCE_Y}
      {...handlers}
    >
      <Back />
      <Core {...props} />
    </Root>
  );
};
