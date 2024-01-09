import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { Standard } from './packages/0-Standard';
import { Plus } from './packages/1-Plus';
import { Custom } from './packages/2-Custom';
import { I } from '@components/Icon';
import { PLUS_ICON } from '@constants/icons/text';
import { nToMoney } from '@utils/format';

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
    
      </div>
    </Root>
  );
};
