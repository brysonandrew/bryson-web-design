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
  const { handlers, isSelected } = useSelectHandlers(
    `REVIEWS_SHELL_ITEM_${index}`,
  );
  return (
    <Root
      className={clsx('relative flex w-full p-4')}
      {...handlers}
    >
      <Button className='relative left-1/2' {...props}>
        <motion.div
          className={clsx(
            'absolute -left-1/2',
            BAR_GREEN_CLASS,
          )}
          style={{ top: -2 }}
        />
        <div
          className={clsx(
            'flex items-center justify-center h-16 w-full',
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
