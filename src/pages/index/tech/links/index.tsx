import { Plus } from '@components/icons/Plus';
import { TECH } from '@constants/tech';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TChildrenProps } from '@components/fake-3d/Motion';

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Links: FC<TProps> = ({
  y,
  rotateX,
  filter,
}) => {
  return (
    <Root
      className={clsx(
        'inline-flex flex-col items-center justify-center text-teal-bright ml-2 lg:flex-row preserve-3d',
      )}
      style={{ rotateX, y, filter }}
    >
      <Item {...TECH.REACT} />
      <div className='p-2' />
      <div className='flex items-center justify-center w-full xl:pt-1'>
        <Plus classValue={clsx('h-7 w-7')} />
      </div>
      <div className='p-2' />
      <Item {...TECH.TYPESCRIPT} />
    </Root>
  );
};
