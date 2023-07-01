import { Full } from './full';
import { List } from './list';
import { Space16 } from '@components/spaces/Space16';
import { APP_ITEMS } from '@constants/apps';
import { useSelectedItem } from './useSelectedItem';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { WIDTH_CLASS } from '@constants/styles';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;
  return (
    <Root className={clsx(WIDTH_CLASS)} style={style}>
      <List items={APP_ITEMS} selectedPath={selectedPath} />
      <Space16 />
      <>
        {isSelectedItem && (
          <Full selectedPath={selectedPath} />
        )}
      </>
    </Root>
  );
};
