import { Glow } from '@components/glow';
import { Metal } from '@components/metal';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import styled from '@emotion/styled';
import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

const SHARED_CLASS = 'rounded-full';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'button'> & TClassValueProps;
export const Circle: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      'relative center glow-interactive w-10 h-10',
      SHARED_CLASS,
      classValue,
    )}
    {...PARENT_GLOW_PROPS}
  >
    <Glow classValue={SHARED_CLASS} drop={0.5}>
      <Metal classValue={SHARED_CLASS} />
    </Glow>
    <Button
      className='relative p-3 cursor-pointer text-color-1'
      {...props}
    >
      <>{children}</>
    </Button>
  </Root>
);
