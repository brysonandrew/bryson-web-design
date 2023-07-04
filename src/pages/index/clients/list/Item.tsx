import styled from '@emotion/styled';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Review } from './review';
import { Fill } from '@components/metal/Fill';
import { Bar } from './Bar';
import {
  DELAY_VISIBILITY,
  DURATION_DELAY_TRANSITION,
  HOVER_GLOW_PROPS_SM,
  resolveDropShadow,
  resolveShadow,
} from '@pages/index/constants';
import { PRESENCE_OPACITY } from '@constants/animation';

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
  const barProps = {
    variants: {
      hover: {
        filter: resolveDropShadow(20),
      },
      animate: {
        filter: resolveDropShadow(10),
      },
    },
  };
  const contentProps = {
    variants: {
      hover: {
        textShadow: resolveShadow(6),
      },
      animate: {
        textShadow: resolveShadow(0),
      },
    },
  };
  return (
    <Root
      className={clsx('relative flex w-full')}
      {...props}
    >
      <Button
        key='ITEM_BUTTON'
        className='relative flex items-center justify-center w-full md:w-core-md py-4'
        whileHover='hover'
        initial='initial'
        animate='animate'
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
          },
        }}
        {...DURATION_DELAY_TRANSITION}
      >
        {isLong && <div className='py-20' />}
        <Bar classValue='-right-1' {...barProps} />
        <Bar classValue='-left-1' {...barProps} />
        <AnimatePresence>
          {!isLong && (
            <motion.div key="ITEM_SHORT" {...PRESENCE_OPACITY}>
              <Fill />
              <motion.div
                className='relative pointer-events-none z-10'
                {...contentProps}
              >
                <Review index={index} type='short' />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </Root>
  );
};
//
