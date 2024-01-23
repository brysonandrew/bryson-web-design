import { Plus } from '@pages/index/tech/icons/Plus';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TParallaxMotionChildrenProps } from '@brysonandrew/parallax/config';
import { Transform } from './Transform';
import { TECH } from '@pages/index/tech/config/constants';

const Root = styled.div``;
const Inner = styled(motion.div)``;

type TProps = TParallaxMotionChildrenProps;
export const Links: FC<TProps> = ({ style }) => {
  return (
    <Transform motionValue={style.rotateX}>
      {(glow) => (
        <Root className='center'>
          <Inner
            className='inline-flex flex-col items-center justify-center  ml-2 lg:flex-row preserve-3d'
            style={style}
          >
            <Item
              style={{ z: 0 }}
              glow={glow}
              {...TECH.REACT}
            />
            <div className='p-2' />
            <motion.div
              className='center w-full xl:pt-1'
              style={{ z: 60 }}
            >
              <Plus classValue='h-7 w-7' />
            </motion.div>
            <div className='p-2' />
            <Item
              style={{ z: 120 }}
              glow={glow}
              {...TECH.TYPESCRIPT}
            />
          </Inner>
        </Root>
      )}
    </Transform>
  );
};
