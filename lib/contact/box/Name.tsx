import styled from '@emotion/styled';
import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root layout='size' className='name'>
      <motion.h4 layout className='name-text'>
        {title}
      </motion.h4>
    </Root>
  );
};
