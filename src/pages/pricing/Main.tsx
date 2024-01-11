import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TFake3DMotionChildrenProps } from '@components/animation/fake-3d/config';
import { Package } from './layout/Package';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='column gap-16 relative w-core will-change-transform'
      style={style}
    >
      <div className='column relative items-stretch w-full h-full gap-8 lg:row'>
        <Package
          title='Standard'
          backgroundColorClass='bg-standard'
          textColorClass='text-standard'
        />
        <Package
          title='Plus'
          backgroundColorClass='bg-plus'
          textColorClass='text-plus'
        />
        <Package
          title='Select'
          backgroundColorClass='bg-select'
          textColorClass='text-select'
        />
      </div>
    </Root>
  );
};
