import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TParallaxMotionChildrenProps } from '@lib/components/animation/parallax/config';
import { Package } from './layout/Package';

const Root = styled(motion.div)``;

type TProps = Partial<TParallaxMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='column gap-16 relative w-core will-change-transform'
      style={style}
    >
      <div className='column-stretch relative w-full h-full gap-8 lg:row-stretch'>
        <Package
          title='Standard'
          backgroundColorClass='bg-standard gradient-standard'
          textColorClass='text-standard'
        />
        <Package
          title='Plus'
          backgroundColorClass='bg-plus gradient-plus'
          textColorClass='text-plus'
        />
        <Package
          title='Select'
          backgroundColorClass='bg-select gradient-select'
          textColorClass='text-select'
        />
      </div>
    </Root>
  );
};
