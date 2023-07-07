import { Gallery } from './gallery';
import { List } from './list';
import { Space16 } from '@components/spaces/Space16';
import { APP_ITEMS } from '@constants/apps';
import { useCurrSource } from '../../hooks/params/useCurrSource';
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
  const currSource = useCurrSource();
  const isSelectedItem = currSource !== null;
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
      <List
        key='SHOWCASE_MAIN_LIST'
        items={APP_ITEMS}
        currSource={currSource}
      />
      {isSelectedItem && (
        <Gallery currSource={currSource} />
      )}
    </Root>
  );
};
