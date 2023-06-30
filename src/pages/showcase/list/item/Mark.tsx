import styled from '@emotion/styled';
import COLORS from '@windi/config-colors.json';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = {
  colorKey: keyof typeof COLORS;
};
export const Mark: FC<TProps> = ({ colorKey }) => (
  <Root
    className={clsx(
      'absolute top-0 bottom-0 left-0 h-full w-2 pointer-events-none',
    )}
    style={{ backgroundColor: COLORS[colorKey] }}
  />
);
