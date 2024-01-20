import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/base/types/dom';
import { motion } from 'framer-motion';
import { Animation } from '@brysonandrew/base/components/layout/typography/animation';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative w-core z-20'>
      <h2
        className='title-home row-wrap justify-center gap-4'
        style={{ letterSpacing: '0.125em' }}
      >
        <Animation>{children}</Animation>
      </h2>
    </Root>
  );
};
