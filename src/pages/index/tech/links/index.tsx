import { Plus } from '@components/icons/Plus';
import { TECH } from '@constants/tech';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';

const Root = styled(motion.div)``;
const Inner = styled(motion.div)``;

type TProps = TFake3DMotionChildrenProps;
export const Links: FC<TProps> = ({
  style: { y, rotateX, filter },
}) => {
  return (
    <Root className='flex justify-center'>
      <Inner
        className={clsx(
          'inline-flex flex-col items-center justify-center text-teal-bright ml-2 lg:flex-row preserve-3d',
        )}
        style={{ rotateX, y, filter }}
      >
        <Item {...TECH.REACT} />
        <div className='p-2' />
        <motion.div
          className='flex items-center justify-center w-full xl:pt-1'
          style={{ z: 10 }}
        >
          <Plus classValue={clsx('h-7 w-7')} />
        </motion.div>
        <div className='p-2' />
        <Item {...TECH.TYPESCRIPT} />
      </Inner>
    </Root>
  );
};
