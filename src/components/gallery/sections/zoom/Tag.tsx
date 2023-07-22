import clsx from 'clsx';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Cross } from '@components/icons/Cross';
import { TChildren } from '@t/index';

export const Root = styled(motion.div)``;
export const Text = styled.code``;

type TProps = {
  children: TChildren;
};
export const Tag: FC<TProps> = ({ children }) => {
  return (
    <Root
      className={clsx(
        'absolute right-0 top-0 flex items-center pl-1.5 pr-2 pt-0.25 pb-0.5 text-teal-bright bg-black-1 z-10',
      )}
    >
      <Cross
        classValue='w-2.5 h-2.5 mt-0.5'
      />
      <div className='p-0.5' />
      <Text className='relative text-xs whitespace-nowrap'>
        {children}
      </Text>
    </Root>
  );
};
