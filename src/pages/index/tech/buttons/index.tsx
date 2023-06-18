import { Plus } from '@components/icons/Plus';
import { TECH } from '@constants/tech';
import styled from '@emotion/styled';
import { XL } from '@styles/styles';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'>;
export const Buttons: FC<TProps> = () => {
  return (
    <Root className='flex flex-col items-start text-teal-bright ml-2 xl:flex-row lg:items-center'>
      <Item {...TECH.REACT} />
      <div className='p-2' />
      <div className='flex items-center justify-center w-full xl:pt-1'>
        <Plus classValue={clsx(XL)} />
      </div>
      <div className='p-2' />
      <Item {...TECH.TYPESCRIPT} />
    </Root>
  );
};
