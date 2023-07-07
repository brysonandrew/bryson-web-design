import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { IMAGE_PLACEHOLDER_ID } from '../../pages/projects/gallery/sections/constants';
import { resolveUrlId } from '@utils/resolveUrlId';
import { resolveGradientStops } from './resolveGradientStops';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';

export const Root = styled(motion.div)``;

type TProps = TClassValueProps;
export const Placeholder: FC<TProps> = ({ classValue }) => {
  return (
    <Root
      className='relative flex items-center justify-center w-full h-full'
      {...{
        initial: { opacity: 0 },
        animate: { opacity: 0.28 },
        exit: { opacity: 0 },
        transition: { ease: 'linear', duration: 1.4 },
      }}
    >
      <div
        className={clsx('transform', classValue)}
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
            backgroundImage: `linear-gradient(to right, ${resolveGradientStops(
              4,
              ['teal-bright-04', 'transparent'],
            )})`,
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
