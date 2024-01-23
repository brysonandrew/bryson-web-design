import styled from '@emotion/styled';
import { TAnchorMotionProps, TClassValueProps, TTitleProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';

const Root = styled(motion.a)``;

type TProps = TAnchorMotionProps &
  TClassValueProps &
  TTitleProps;
export const Anchor: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <Root
      className='circle-interactive'
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
