import { Sub } from '@components/typography/Sub';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export const Title = () => (
  <Root className='column'>
    <div className='column-start whitespace-nowrap'>
      <h2 style={{ fontSize: 33, lineHeight: 1 }}>
        Andrew Bryson
      </h2>
      <Sub
        className='whitespace-nowrap'
        style={{
          fontSize: 17,
          textTransform: 'uppercase',
        }}
      >
        Front-end web developer
      </Sub>
    </div>
  </Root>
);
