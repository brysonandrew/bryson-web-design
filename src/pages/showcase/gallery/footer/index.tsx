import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { FOOTER_SIZE } from '../sections/constants';
import { PRESENCE_Y } from '@constants/animation';
import { FillDarkest } from '@components/metal/FillDarkest';
import { Core } from './core';
import { TBaseProps } from '../types';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = ({ ...props }) => {
  return (
    <Root
      className='absolute left-0 bottom-0 flex justify-center w-full z-10'
      style={{ height: FOOTER_SIZE }}
      transition={{
        ease: 'easeIn',
        duration: 0.2,
        delay: 0.2,
      }}
      {...PRESENCE_Y}
    >
      <FillDarkest />
      {props.isReady && <Core {...props} />}
    </Root>
  );
};
