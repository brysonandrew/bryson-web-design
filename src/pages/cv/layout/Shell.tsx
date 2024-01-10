import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
  style?: CSSProperties;
};
export const Shell: FC<TProps> = ({ style, children }) => (
  <Root
    className='column items-stretch bg-black text-white-9'
    style={style}
  >
    {children}
  </Root>
);
