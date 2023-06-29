import { HTMLMotionProps, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FC } from 'react';
const _Root = styled(motion.header)``;

type TProps = HTMLMotionProps<'header'>;
export const Root: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <_Root
      className='fixed top-0 left-0 flex items-center justify-between w-full px-3 py-2 sm:px-6 sm:py-4 z-50'
      {...props}
    >
      {children}
    </_Root>
  );
};
