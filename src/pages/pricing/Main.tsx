import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TPartialParallaxMotionProps } from '@brysonandrew/motion-parallax/config';
import { Package } from './layout/Package';

const Root = styled(motion.div)``;

type TProps = Partial<TPartialParallaxMotionProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='w-core will-change-transform'
      style={style}
    >
      <div className='column-stretch relative w-full h-full gap-box lg:row-stretch'>
        <Package title='Standard' />
        <Package title='Plus' />
        <Package title='Select' />
      </div>
    </Root>
  );
};
