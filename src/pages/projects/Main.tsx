import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Gallery } from './gallery';
import { List } from './list';
import { PROJECT_ITEMS } from '@constants/projects';
import { useCurrSource } from '../../hooks/params/useCurrSource';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  const currProject = useCurrSource();
  const isSelectedItem = currProject !== null;
  useFreezeScrollBar(!isSelectedItem);

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
      {isSelectedItem && (
        <Gallery currProject={currProject} />
      )}
    </Root>
  );
};
 