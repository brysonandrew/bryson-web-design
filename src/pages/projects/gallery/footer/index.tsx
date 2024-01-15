import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  DURATION,
  PRESENCE_Y,
} from '@lib/animation/constants';
import { MetalDarkest } from '@components/decoration/metal/MetalDarkest';
import { Core } from './core';
import { TBaseProps } from '../types';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
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
      <MetalDarkest />
      <Core {...props} />
    </Root>
  );
};
