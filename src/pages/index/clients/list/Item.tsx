import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Review } from './review';
import { Fill } from '@components/metal/Fill';
import { Bar } from './Bar';
import { DELAY_VISIBILITY } from '@pages/index/constants';

const Root = styled(motion.li)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'li'> & {
  isLong: boolean;
  index: number;
};
export const Item: FC<TProps> = ({
  isLong,
  index,
  ...props
}) => {
  return (
    <Root
      className={clsx('relative flex w-full')}
      {...props}
    >
      <Button
        key='ITEM_BUTTON'
        className='relative flex items-center justify-center w-full md:w-core py-4'
        {...DELAY_VISIBILITY}
      >
        {isLong && <div className='py-20' />}
        <Bar classValue='-right-1' />
        <Bar classValue='-left-1' />
        <Fill />
        <motion.div className='relative z-10'>
          <Review index={index} type='short' />
        </motion.div>
      </Button>
    </Root>
  );
};
//
