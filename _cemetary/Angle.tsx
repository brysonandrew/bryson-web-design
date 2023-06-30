import { Fill } from '@components/metal/Fill';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Background = styled(motion.div)``;

export const Angle = () => {
  return (
    <Background
      className='absolute shadow-baby-blue-03-sm'
      style={{
        rotateZ: '76deg',
        left: -100,
        top: -630,
        width: 600,
        height: 800,
      }}
    >
      <Fill />
    </Background>
  );
};
