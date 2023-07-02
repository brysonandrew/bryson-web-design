import type { FC } from 'react';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ROOT_CLASS, TEXT_CLASS } from '.';
import clsx from 'clsx';

export const Root = styled(motion.div)``;
export const Background = styled(motion.div)``;

export type TProps = HTMLMotionProps<'div'>;
export const Empty: FC<TProps> = ({children, ...props}) => {
  return (
    <Root
      className={clsx(ROOT_CLASS, 'shadow-white-02-sm cursor-wait')}
      {...props}
    >
      <motion.span className={clsx(TEXT_CLASS, 'text-gray')}>
      {children}
      </motion.span>
    </Root>
  );
};
