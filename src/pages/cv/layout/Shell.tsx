import { FilterShell } from '@components/filters/FilterShell';
import { Displacement } from '@components/filters/displacement';
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
    className='flex flex-col bg-black text-white'
    style={style}
  >
    <FilterShell>
      <Displacement />
    </FilterShell>
    {children}
  </Root>
);
