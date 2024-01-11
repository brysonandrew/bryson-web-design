import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TFake3DMotionChildrenProps } from '@components/animation/fake-3d/config';
import { Form } from './form';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
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
