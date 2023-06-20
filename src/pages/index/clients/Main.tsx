import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Review } from './Review';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> & {
  isActive: boolean;
  index: number;
  isLong: boolean;
};
export const Main: FC<TProps> = ({
  index,
  isActive,
  isLong,
  ...props
}) => (
  <Root
    className={clsx('p-4 py-2 m-1 w-full lg:w-core')}
    {...props}
    style={{ x: '-50%' }}
  >
    {!isLong && (
      <motion.div
        className='absolute inset-0 bg-baby-blue-01'
        layoutId={`${index}`}
      />
    )}
    <Review index={index} type='short' />
  </Root>
);
