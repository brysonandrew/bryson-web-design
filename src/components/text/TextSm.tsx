import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const TEXT_SM_CLASS =
  'text-left text-teal-bright text-xl md:text-2xl';

const Root = styled(motion.h5)``;

type TProps = HTMLMotionProps<'h5'> & {
  classValue?: ClassValue;
};
export const TextSm: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(TEXT_SM_CLASS, classValue)}
    style={style}
    {...props}
  >
    {children}
  </Root>
);
 