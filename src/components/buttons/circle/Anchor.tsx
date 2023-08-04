import styled from '@emotion/styled';
import { TClassValueProps } from '@t/index';
import {
  TMotionAnchorProps,
} from '@t/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.a)``;

type TProps = TMotionAnchorProps & TClassValueProps;
export const Anchor: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root className='circle-interactive' {...props}>
      <>{children}</>
    </Root>
  );
};
