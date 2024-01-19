import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/lib/types/dom';
import { motion } from 'framer-motion';
import { Animation } from '@brysonandrew/lib/components/layout/typography/animation';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative w-core z-20'>
      <h2 className='row-wrap justify-center gap-4 title-page uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl'>
        <Animation>{children}</Animation>
      </h2>
    </Root>
  );
};
