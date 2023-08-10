import { Metal } from '@components/metal';
import { Space } from '@components/spaces/Space';
import { Space3 } from '@components/spaces/Space3';
import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Home } from './Home';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'>;
export const Ending: FC<TProps> = () => (
  <Root className='relative flex flex-col items-center'>
    <motion.div
      className='inline-flex flex-col items-start'
      style={{ x: '50%' }}
    >
      <div
        className='absolute z-50'
        style={{ left: -2, width: 16, height: 740 }}
      >
        <Metal />
      </div>
      <Space />
      <Contact />
      <Space3 />
      <Projects />
      <Space3 />
      <Home />
    </motion.div>
  </Root>
);
