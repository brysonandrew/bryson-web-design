import { Gallery } from './gallery';
import { List } from './list';
import { Space16 } from '@components/spaces/Space16';
import { APP_ITEMS } from '@constants/apps';
import { useSelectedItem } from './useSelectedItem';
import { FC } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { WIDTH_CLASS } from '@constants/styles';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style }) => {
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;
  useFreezeScrollBar(!isSelectedItem);

  return (
    <Root
      className={clsx('relative', WIDTH_CLASS)}
      style={{
        filter: style?.filter,
        rotateX: style?.rotateX,
        top: style?.y,
      }}
    >
      <AnimatePresence>
        <List
          key='SHOWCASE_MAIN_LIST'
          items={APP_ITEMS}
          selectedPath={selectedPath}
        />
        <Space16 key='SHOWCASE_MAIN_SPACE_16' />
        {isSelectedItem && (
          <Gallery
            key='SHOWCASE_MAIN_GALLERY'
            selectedPath={selectedPath}
          />
        )}
      </AnimatePresence>
    </Root>
  );
};
