import { DragIcon } from './DragIcon';
import { FillDark } from '@components/metal/FillDark';
import { useDrag } from '../../hooks/useDrag';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useKeys } from '../../hooks/useKeys';
import { TBaseProps } from '../../types';
import { Items } from './Items';
import { PADDING_X } from './config';
import { FillLight } from '@components/metal/FillLight';

const Root = styled(motion.div)``;
const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { items, count, readyCount, motionX, width } =
    props;
  useKeys({ readyCount });
  const itemWidth = width / count;
  const dragHandlers = useDrag({
    width: width,
    items,
    motionX,
  });

  return (
    <Root
      className='relative h-full'
      style={{ width: itemWidth }}
    >
      <FillLight />
      <Dragger
        className='relative flex items-center h-full'
        whileHover={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
        style={{
          x: motionX,
          left: -PADDING_X,
          width: width + PADDING_X * 2,
          padding: `1rem ${PADDING_X}px`,
        }}
        dragConstraints={{
          left: -width + itemWidth,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        {...dragHandlers}
      >
        <FillDark classValue='opacity-50' />
        <DragIcon classValue='left-5' />
        <Items items={items} itemWidth={itemWidth} />
        <DragIcon classValue='right-5' />
      </Dragger>
    </Root>
  );
};
1;
