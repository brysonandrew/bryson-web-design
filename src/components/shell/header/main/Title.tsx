import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';
import { Sub } from '../../../text/Sub';
import { GlitchPorsalin } from '../../../text/glitch-porsalin';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = (props) => (
  <Root className='flex items-center'>
    <motion.div className='flex relative pl-0 pr-1 pt-0.5 pb-1 grow'>
      <motion.div className='flex flex-col'>
        <GlitchPorsalin {...props} tag='div' offset={1}>
          <h3
            style={{
              position: 'relative',
              left: 2,
              top: 2,
              width: '100%',
              fontSize: 24,
              lineHeight: 1,
              textTransform: 'uppercase',
              fontStyle: 'italic',
            }}
          >
            Bryson A
          </h3>
        </GlitchPorsalin>
        <div className='pt-1' />
        <Sub
          classValue='relative md:flex text-teal-bright uppercase'
          style={{
            fontSize: 15,
            left: 2,
            fontStyle: 'italic',
          }}
        >
          Web developer
        </Sub>
      </motion.div>
    </motion.div>
  </Root>
);
