import { Plus } from '@components/icons/Plus';
import { TECH } from '@constants/tech';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';

const Root = styled.div``;
const Inner = styled(motion.div)``;

type TProps = TFake3DMotionChildrenProps;
export const Links: FC<TProps> = ({
  style: { y, rotateX, filter },
}) => {
  return (
    <Root className='center'>
      <Inner
        className={clsx(
          'inline-flex flex-col items-center justify-center text-color ml-2 lg:flex-row preserve-3d',
        )}
        style={{ rotateX, y, filter }}
      >
        <Item style={{ z: 0 }} {...TECH.REACT} />
        <div className='p-2' />
        <motion.div
          className='center w-full xl:pt-1'
          style={{ z: 60 }}
        >
          <Plus classValue={clsx('h-7 w-7')} />
        </motion.div>
        <div className='p-2' />
        <Item style={{ z: 120 }} {...TECH.TYPESCRIPT} />
      </Inner>
    </Root>
  );
};
