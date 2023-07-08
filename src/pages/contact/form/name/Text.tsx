import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import * as unoConfig from '@uno/config';
const COLORS = unoConfig.default.theme.colors;

const Root = styled(motion.h4)`
`;

type TProps = {
  children: TChildren;
};
export const Text: FC<TProps> = ({ children }) => (
  <Root
    className='text-2xl whitespace-nowrap capitalize'
    variants={{
      idle: {
        color: COLORS['teal-bright'],
      },
      focus: {
        color: COLORS['teal-bright'],
        opacity: 1,
      },
      value: {
        color: COLORS['white'],
        opacity: 0.6,
      },
    }}
  >
    {children}
  </Root>
);
