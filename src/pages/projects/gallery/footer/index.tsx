import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { PRESENCE_Y } from '@constants/animation';
import { MetalDarkest } from '@components/metal/MetalDarkest';
import { Core } from './core';
import { TBaseProps } from '../types';
import { Glow } from '@components/glow';
import {
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
} from '@constants/colors';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = ({ ...props }) => {
  return (
    <Root
      className='relative flex justify-center w-full z-10'
      transition={{
        ease: 'easeIn',
        duration: 0.2,
        delay: 0.2,
      }}
      {...PRESENCE_Y}
    >
      <MetalDarkest />
      {props.isReady && <Core {...props} />}
    </Root>
  );
};
