import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { useInView } from 'react-intersection-observer';
import { Standard } from './packages/0-Standard';
import { Plus } from './packages/1-Plus';
import { Custom } from './packages/2-Custom';
import { I } from '@components/Icon';
import { PLUS_ICON } from '@constants/icons/text';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  return (
    <Root
      className='column gap-16 relative w-core will-change-transform'
      style={style}
    >
      <div className='column relative items-stretch w-full h-full gap-8 lg:row'>
        <Standard />
        <Plus />
        <Custom />
        <div className='row gap-2 absolute top-full left-0 text-sm text-left mt-4 mx-4'>
          <I icon={PLUS_ICON} className='shrink-0 h-3' />
          <p className='text-sm text-left w-full'>
            all live sites incur $19.99 per month for
            hosting
          </p>
        </div>
      </div>
    </Root>
  );
};
