import { Text } from '@components/text/Text';
import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Main } from './Main';
import type { TChildrenProps } from './Motion';

const Root = styled(motion.li)``;
const List = styled(motion.ul)``;
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
    <Root
      className={clsx(
        'relative flex w-full overflow-hidden',
      )}
      initial={false}
      whileHover='hover'
      animate={isActive ? 'active' : 'animate'}
    >
      <Button className='relative' {...props}>
        <motion.div
          className={clsx('hover:cursor-pointer')}
          variants={{
            hover: {
              filter: 'brightness(100%)',
              opacity: 1,
            },
            animate: {
              filter: 'brightness(40%)',
              opacity: 0.8,
            },
          }}
        />
        <List
          className='inline-flex relative'
          style={{
            x: ['-100%', '-100%', '-100%'][index],
          }}
        >
          <li>
            <Text>{children}</Text>
          </li>
          <Main
            isActive={isActive}
            isLong={isLong}
            index={index}
          />
        </List>
      </Button>
    </Root>
  );
};
