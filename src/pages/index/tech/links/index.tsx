import { Plus } from '@components/icons/tech/Plus';
import { TECH } from '@constants/tech';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Item } from './Item';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { Transform } from './Transform';

const Root = styled.div``;
const Inner = styled(motion.div)``;

type TProps = TFake3DMotionChildrenProps;
export const Links: FC<TProps> = ({ style }) => {
  return (
    <Transform motionValue={style.rotateX}>
      {(glow) => (
        <Root className='center'>
          <Inner
            className='inline-flex flex-col items-center justify-center text-g-tb ml-2 lg:flex-row preserve-3d'
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
