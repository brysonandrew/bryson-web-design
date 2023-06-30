import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const FINAL_HEADER_HEIGHT = 60;

const BackgroundFade = styled(motion.div)``;

export const Decoration = () => (
  <BackgroundFade
    style={{
      originY: 0,
      originX: 0,
      height: FINAL_HEADER_HEIGHT * 2,
    }}
    className='fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black-dark pointer-events-none px-4 pt-4 pb-5'
  />
);
