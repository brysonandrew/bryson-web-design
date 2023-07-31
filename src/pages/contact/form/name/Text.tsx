import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import * as unoConfig from '@uno/config';
import { useContext } from '@state/Context';
const COLORS = unoConfig.default.theme.colors;

const Root = styled(motion.h4)``;

type TProps = {
  children: TChildren;
};
export const Text: FC<TProps> = ({ children }) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const color1 = isDarkMode
    ? COLORS['teal-bright']
    : COLORS['black'];
  const color2 = isDarkMode
    ? COLORS['white']
    : COLORS['black'];

  return (
    <Root
      className='text-2xl whitespace-nowrap capitalize'
      variants={{
        idle: {
          color: color1,
        },
        focus: {
          color: color1,
          opacity: 1,
        },
        value: {
          color: color2,
          opacity: 0.6,
        },
      }}
    >
      {children}
    </Root>
  );
};
