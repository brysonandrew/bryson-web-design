import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { List } from './list';
import { PROJECT_ITEMS } from '@constants/projects';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';
import { useCurrProject } from '@hooks/params/useCurrProject';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  const currProject = useCurrProject();

  return (
    <Root
      className='relative w-core'
      style={{
        rotateX: style?.rotateX,
        top: style?.y,
      }}
    >
      <List
        key='SHOWCASE_MAIN_LIST'
        items={PROJECT_ITEMS}
        currProject={currProject}
      />
    </Root>
  );
};
