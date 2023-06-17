import { Desk } from '@components/icons/Desk';
import { EXPERIENCE_SLOGAN } from '@components/shell/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';
import { Sub } from '../../../text/Sub';
import { GlitchPorsalin } from '../../../text/glitch-porsalin';
import { STROKE_CLASS_NAMES } from '../../../text/glitch-porsalin/config';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => (
  <Root className='flex items-center'>
    <div className='hidden sm:flex -mt-2'>
      <GlitchPorsalin
        offset={0.6}
        tag='div'
        classValues={STROKE_CLASS_NAMES}
      >
        <Desk
          width={44}
          height={44}
          fill='none'
          strokeWidth={8}
        />
      </GlitchPorsalin>
    </div>
    <motion.div className='flex relative pl-0 sm:pl-3 pr-1 pt-0.5 pb-1 grow'>
      <motion.div className='flex flex-col'>
        <GlitchPorsalin {...props} tag='div' offset={1}>
          <h1
            style={{
              position: 'relative',
              left: 2,
              top: 2,
              width: '100%',
              fontSize: 24,
              lineHeight: 1,
            }}
          >
            Bryson A
          </h1>
        </GlitchPorsalin>
        <div className='pt-1' />
        <Sub
          classValue='relative md:flex text-teal-bright uppercase'
          style={{
            fontSize: 15,
            left: 2,
            fontStyle: 'bold',
          }}
        >
          <h1>Web developer</h1>
        </Sub>
      </motion.div>
    </motion.div>
  </Root>
);
