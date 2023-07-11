import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TBaseProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
};
export const VerticalFade: FC<TBaseProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(
      'absolute left-0 right-0 w-full h-60 from-black pointer-events-none z-10',
      classValue,
    )}
    {...props}
  />
);
