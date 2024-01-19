import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TParallaxMotionChildrenProps } from '@brysonandrew/animation/components/parallax/config';
import { Contact } from '@brysonandrew/contact';

const Root = styled(motion.div)``;

type TProps = Partial<TParallaxMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='w-core will-change-transform'
      style={style}
    >
      <Contact />
    </Root>
  );
};
