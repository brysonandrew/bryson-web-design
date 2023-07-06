import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { IMAGE_PLACEHOLDER_ID } from './constants';
import { resolveUrlId } from '@utils/resolveUrlId';
import COLORS from '@windi/config-colors.json';

export const Root = styled(motion.div)``;

export const Placeholder: FC = () => {
  return (
    <Root
      className='relative flex items-center justify-center w-full h-full'
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 0.28 },
        exit: { opacity: 0 },
      }}
    >
      <div
        className='transform origin-center scale-placeholder sm:scale-placeholder_sm md:scale-placeholder_md'
        style={{
          width: 24,
          height: 24,
          clipPath: resolveUrlId(IMAGE_PLACEHOLDER_ID),
        }}
      >
        <motion.figure
          className='relative bg-teal-bright-01 h-full'
          style={{
            width: '300%',
            backgroundImage: `linear-gradient(to right, transparent 0%, ${COLORS['teal-bright-02']} 33%, transparent 66.67%, ${COLORS['teal-bright-02']} 100%)`,
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
      </div>
    </Root>
  );
};
