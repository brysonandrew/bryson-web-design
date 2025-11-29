import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { ThinLineGrow } from '@brysonandrew/layout-line';
import { Subtitle } from '@pages/index/build/headline/Subtitle';
import { Title } from '@pages/index/build/headline/Title';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Headline: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative column gap-8 w-core z-10 lg:gap-12'>
      <Title>{children}</Title>
      <div className='relative column gap-2'>
        <Subtitle>
          New Zealand born
          {/* Based In Christchurch */}
          </Subtitle>
        <ThinLineGrow delay={0.2} classValue='w-3/4 opacity-40' />
        <Subtitle>
          Digital Nomad
          {/* New Zealand */}
          </Subtitle>
      </div>
    </Root>
  );
};
