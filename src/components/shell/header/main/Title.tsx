import { ThinLine } from '@components/thin-line';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => (
  <Root className='relative flex flex-col sm:flex-row'>
    <h1 className='text-teal-bright text-md uppercase'>
      Bryson A.
    </h1>
    <div className='p-0.5' />
    <h2 className='text-baby-blue text-md italic uppercase'>
      Web developer
    </h2>
    <ThinLine classValue='absolute -bottom-1 left-0' />
  </Root>
);
