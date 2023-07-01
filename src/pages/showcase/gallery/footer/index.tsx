import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { FOOTER_SIZE } from '../sections/constants';
import { PRESENCE_Y } from '@constants/animation';
import { FillDarkest } from '@components/metal/FillDarkest';
import { Core } from './Core';
import { TBaseProps } from '../types';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = ({ ...props }) => {
  return (
    <Root
      className='absolute left-0 bottom-0 flex justify-center w-full bg-black-9 backdrop-blur-sm'
      style={{ height: FOOTER_SIZE }}
      {...PRESENCE_Y}
    >
      <FillDarkest />
      {props.isReady && <Core {...props} />}
    </Root>
  );
};
