import { STORY } from '@constants/copy';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Title } from '../Title';
import { Images } from './images';

const Root = styled(motion.div)``;

export const Build: FC = () => {
  return (
    <Root className='flex flex-col items-center'>
      <Title>{STORY.build}</Title>
      <Images />
    </Root>
  );
};
