import type { FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import {
  TClassValueProps,
  TDivMotionProps,
} from 'lib/types/dom';
import clsx from 'clsx';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & TClassValueProps;
export const Blank: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return <Root className={clsx(classValue)} {...props} />;
};
