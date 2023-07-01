import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { textShadow } from './config';
import COLORS from '@windi/config-colors.json';

const Root = styled(motion.h4)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(153, 204, 255);
`;

type TProps = {
  children: TChildren;
};
export const Name: FC<TProps> = ({ children }) => (
  <Root
    className='text-xl whitespace-nowrap'
    variants={{
      idle: {
        textShadow: textShadow.off,
        color: COLORS['white'],
      },
      focus: {
        textShadow: textShadow.on,
        color: COLORS['teal'],
        opacity: 1,
      },
      value: {
        textShadow: textShadow.off,
        color: COLORS['teal-bright'],
        opacity: 0.6,
      },
    }}
  >
    {children}
  </Root>
);
