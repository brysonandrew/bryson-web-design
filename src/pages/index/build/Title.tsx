import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { Animation } from '@brysonandrew/layout/typography/animation';
import { FadeDown, FadeUp } from '@brysonandrew/fade';
import { Line } from '@brysonandrew/layout';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative column gap-8 w-core mx-20 z-20'>
      <FadeDown
        classValue='flex lg:hidden absolute h-full w-full opacity-light'
        style={{ height: '20vh' }}
        from='from-white'
      />
      <FadeUp
        classValue='flex lg:hidden absolute h-full w-full opacity-light'
        style={{ height: '10vh' }}
        from='from-white'
      />
      <FadeDown
        classValue='flex lg:hidden absolute h-full w-full opacity-dark'
        style={{ height: '20vh' }}
        from='from-black'
      />
      <FadeUp
        classValue='flex lg:hidden absolute h-full w-full opacity-dark'
        style={{ height: '10vh' }}
        from='from-black'
      />
      <h2
        className='relative title-home row-wrap justify-center gap-4'
        style={{ letterSpacing: '0.125em' }}
      >
        <Animation>{children}</Animation>
      </h2>
      <h3
        className='relative column gap-2 uppercase text-lg lg:text-xl text-main'
        style={{ letterSpacing: '0.5em' }}
      >
        Based In Christchurch
        <Line color='border-secondary' />
        New Zealand
      </h3>
    </Root>
  );
};
