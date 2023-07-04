import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import COLORS from '@windi/config-colors.json';

export const Root = styled(motion.div)``;

export const Placeholder: FC = () => {
  return (
    <motion.div
      className='relative w-full h-full overflow-hidden'
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
    >
      <motion.figure
        className='relative bg-teal-bright-01 h-full'
        style={{
          width: '300%',
          backgroundImage: `linear-gradient(to right, transparent 0%, ${COLORS['teal-bright-01']} 33%, transparent 66.67%, ${COLORS['teal-bright-01']} 100%)`,
        }}
        {...{
          animate: {
            x: ['0%', '-66.67%'],
          },
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          },
        }}
      />
    </motion.div>
  );
};
