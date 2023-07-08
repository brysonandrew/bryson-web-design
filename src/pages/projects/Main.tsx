import { Gallery } from './gallery';
import { List } from './list';
import { APP_ITEMS } from '@constants/apps';
import { useCurrSource } from '../../hooks/params/useCurrSource';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
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
      className='relative w-core'
      style={{
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
