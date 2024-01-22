import styled from '@emotion/styled';
import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root layout className='name'>
      <h4 className='name-text'>{title}</h4>
    </Root>
  );
};
