import type { FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import styled from '@emotion/styled';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { WIDTH_CLASS } from '@constants/styles';
import { Form } from './form';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root className={clsx(WIDTH_CLASS)} style={style}>
      <Form />
    </Root>
  );
};
