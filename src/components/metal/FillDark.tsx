import { metalRadialDarkCss } from '@css/metal';
import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.div)`
  ${metalRadialDarkCss}
`;

type TProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
};
export const FillDark: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(`absolute inset-0`, classValue)}
    {...props}
  />
);
