import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useContext } from '@state/Context';
import { COLORS } from '@constants/colors';

const Root = styled(motion.h4)``;

type TProps = {
  children: TChildren;
};
export const Text: FC<TProps> = ({ children }) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const color = isDarkMode
    ? COLORS['teal-bright']
    : COLORS['gray'];
  const color1 = isDarkMode
    ? COLORS['white']
    : COLORS['gray'];

  return (
    <Root
      key={isDarkMode ? 'dark' : 'light'}
      className='text-2xl text-color-stroke-1 whitespace-nowrap capitalize'
      style={{ color, opacity: 1 }}
      variants={{
        idle: {
          color,
          opacity: 1,
        },
        focus: {
          color,
          opacity: 1,
        },
        value: {
          color: color1,
          opacity: 0.6,
        },
      }}
    >
      {children}
    </Root>
  );
};
