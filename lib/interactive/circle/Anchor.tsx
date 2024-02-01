import styled from '@emotion/styled';
import { TAnchorMotionProps, TClassValueProps, TTitleProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';

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
    <motion.a
      className='circle-interactive'
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </motion.a>
  );
};
