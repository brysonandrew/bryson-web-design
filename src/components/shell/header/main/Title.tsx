import { Glow } from '@components/glow';
import { Space } from '@components/spaces/Space';
import { Space0125 } from '@components/spaces/Space0125';
import { Space025 } from '@components/spaces/Space025';
import { Space2 } from '@components/spaces/Space2';
import { ThinLine } from '@components/thin-line';
import {
  resolveDropShadow,
  resolveGlowProps,
} from '@constants/colors';
import styled from '@emotion/styled';
import { color, motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => (
  <Root className='row-start'>
    <div
      className='relative top-1.25 w-4 h-4 shrink-0 rounded-full bg-teal-bright glow-interactive md:top-1'
      style={{
        filter: resolveDropShadow(6, 'baby-blue'),
      }}
    />
    <div className='p-1.5' />
    <div className='relative flex flex-col pb-2 md:flex-row'>
      <h1 className='relative text-teal-bright text-md uppercase'>
        Bryson A.
      </h1>
      <div className='p-0 md:p-0.75' />
      <h2 className='text-baby-blue text-md italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.0625'>
        Web developer
        <ThinLine classValue='flex absolute bottom-1 left-0' />
      </h2>
    </div>
  </Root>
);
