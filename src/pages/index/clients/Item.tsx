import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  BAR_GREEN_CLASS,
  ROLLING_TEXT_CLASS,
} from '../constants';
import { Main } from './Main';
import type { TChildrenProps } from './Motion';
import { useSelectHandlers } from '@hooks/useSelectHandlers';

const Root = styled(motion.li)``;
const Button = styled(motion.button)``;

type TProps = Pick<Partial<TChildrenProps>, 'xs'> &
  HTMLMotionProps<'button'> & {
    isActive: boolean;
    isLong: boolean;
    index: number;
    children: TChildren;
  };
export const Item: FC<TProps> = ({
  isLong,
  isActive,
  xs,
  index,
  children,
  ...props
}) => {
  return (
    <Root className={clsx('relative flex w-full p-4')}>
      <Button
        className='relative left-1/2'
        style={{ x: '-50%' }}
        {...props}
      >
        <motion.div
          className={clsx('absolute', BAR_GREEN_CLASS)}
        />
        <div
          className={clsx(
            'flex items-center justify-center h-24 sm:h-20 w-full',
            ROLLING_TEXT_CLASS,
          )}
        >
          <Main
            isActive={isActive}
            isLong={isLong}
            index={index}
          />
        </div>
      </Button>
    </Root>
  );
};
