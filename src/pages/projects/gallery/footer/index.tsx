import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { DURATION, PRESENCE_Y } from '@lib/constants/animation';
import { MetalDarkest } from '@components/decoration/metal/MetalDarkest';
import { Core } from './core';
import { TBaseProps } from '../types';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { handlers } = useHoverKey(
    'big',
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
