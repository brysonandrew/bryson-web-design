import { Sub } from 'lib/components/layout/typography/Sub';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export const Title = () => (
  <div className='column-start whitespace-nowrap text-white-5'>
    <h2 style={{ fontSize: 42, lineHeight: 1 }}>
      Andrew Bryson
    </h2>
    <Sub
      className='whitespace-nowrap'
      style={{
        fontSize: 21,
        textTransform: 'uppercase',
        letterSpacing: 0.25,
      }}
    >
      Front-end web developer
    </Sub>
  </div>
);
