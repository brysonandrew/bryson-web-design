import type { FC } from 'react';
import styled from '@emotion/styled';
import { TChildrenString } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { ThinLineGrow } from '@brysonandrew/layout';
import { Subtitle } from '@pages/index/build/headline/Subtitle';
import { Title } from '@pages/index/build/headline/Title';

const Root = styled(motion.div)``;

type TProps = TChildrenString;
export const Headline: FC<TProps> = ({ children }) => {
  return (
    <Root className='relative column gap-8 w-core z-10 lg:gap-12'>
      <Title>{children}</Title>
      <div className='relative column-stretch gap-2'>
        <Subtitle>Based In Christchurch</Subtitle>
        <ThinLineGrow delay={0.2} classValue='w-full' />
        <Subtitle>New Zealand</Subtitle>
      </div>
    </Root>
  );
};
