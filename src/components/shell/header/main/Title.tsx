import { ThinLine } from '@components/thin-line';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => (
  <Root className='relative flex flex-col md:flex-row'>
    <h1 className='text-teal-bright text-md uppercase'>
      Bryson A.
    </h1>
    <div className='p-0 md:p-0.75' />
    <h2 className='text-baby-blue text-md italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.0625'>
      Web developer
    </h2>
    <ThinLine classValue='flex absolute -bottom-1 left-0' />
  </Root>
);
