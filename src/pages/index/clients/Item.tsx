import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Review } from './review';
import { Fill } from '@components/metal/Fill';
import { Bar } from './Bar';

const Root = styled(motion.li)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'button'> & {
  isLong: boolean;
  index: number;
};
export const Item: FC<TProps> = ({
  isLong,
  index,
  ...props
}) => {
  return (
    <Root className={clsx('relative flex w-full')}>
      <Button
        className='relative left-1/2 flex items-center justify-center w-full mx-2 md:w-core p-4'
        style={{ x: '-50%' }}
        {...props}
      >
        <Bar classValue='-right-1' />
        <Bar classValue='-left-1' />
        <Fill />
        <div className='relative z-10'>
          {!isLong && (
            <motion.div
              className='absolute inset-0'
              layoutId={`${index}`}
            />
          )}
          <Review index={index} type='short' />
        </div>
      </Button>
    </Root>
  );
};
//
