import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { Animation } from '@brysonandrew/layout/typography/animation';
import { FadeDown, FadeUp } from '@brysonandrew/fade';
import { Line } from '@brysonandrew/layout';
import { P2 } from '@brysonandrew/space';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative column gap-8 w-core mx-20 z-20'>
      <FadeDown
        classValue='flex lg:hidden absolute top-0 h-full w-full'
        style={{ height: '20vh' }}
        gradientTo='to-transparent'
        gradientFrom='gradient-bw'
      />
      <FadeUp
        classValue='flex lg:hidden absolute bottom-full h-full w-full'
        style={{ height: '10vh' }}
        gradientTo='to-transparent'
        gradientFrom='gradient-bw'
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
        <Line color='bg-secondary' />
        New Zealand
      </h3>
    </Root>
  );
};
