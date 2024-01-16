import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TParallaxMotionChildrenProps } from '@lib/animation/components/parallax/config';
import { Form } from '../../contact';

const Root = styled(motion.div)``;

type TProps = Partial<TParallaxMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='w-core will-change-transform'
      style={style}
    >
      <Form />
    </Root>
  );
};
