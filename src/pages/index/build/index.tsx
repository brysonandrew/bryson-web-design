import { STORY } from '@constants/copy';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Title } from '../Title';
import { Images } from './images';
import { TITLE_OFFSET } from '@components/spaces/TitleOffset';

const Root = styled(motion.div)``;

export const Build: FC = () => (
  <Root className='flex flex-col items-center'>
    <Title>{STORY.build}</Title>
    <motion.div
      className='relative w-full overflow-hidden'
      style={{ height: 140 + TITLE_OFFSET }}
      whileHover='hover'
    >
      <Images />
    </motion.div>
  </Root>
);
