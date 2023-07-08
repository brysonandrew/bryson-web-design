import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const _Root = styled(motion.h5)``;

type TProps = HTMLMotionProps<'h4' | 'h5' | 'h6'> & {
  Root?: FC;
  classValue?: ClassValue;
};
export const TextXl2: FC<TProps> = ({
  classValue,
  style,
  Root = _Root,
  children,
  ...props
}) => (
  <_Root
    className={clsx(
      'text-teal-bright text-left text-3xl tracking-wide px-1 md:text-3.5xl xl:text-4xl',
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </_Root>
);
