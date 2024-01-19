import styled from '@emotion/styled';
import type { TChildren } from '@brysonandrew/base/types/dom';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
  style?: CSSProperties;
};
export const Shell: FC<TProps> = ({ style, children }) => (
  <Root
    style={style}
  >
    {children}
  </Root>
);
