import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const TEXT_SM_CLASS =
  'text-left text-teal-bright whitespace-normal text-xl md:text-2xl truncate';

const Root = styled(motion.h6)``;

type TProps = HTMLMotionProps<'h6'> & {
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
