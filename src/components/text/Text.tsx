import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.h5)``;

type TProps = HTMLMotionProps<'h5'> & {
  classValue?: ClassValue;
};
export const Text: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      'text-teal-bright text-left text-2xl tracking-wide px-1 md:text-3xl lg:text-3.5xl xl:text-4xl',
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </Root>
);
