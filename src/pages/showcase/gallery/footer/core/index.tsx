import { DragIcon } from './DragIcon';
import { FillDark } from '@components/metal/FillDark';
import { useDrag } from '../../hooks/useDrag';
import { PADDING } from '../../sections/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useKeys } from '../../hooks/useKeys';
import { TBaseProps } from '../../types';
import { Items } from './Items';

const Root = styled(motion.div)``;
const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { items, count, readyCount, motionX, width } =
    props;
  useKeys({ readyCount });
  const itemWidth = width / count;
  const dragHandlers = useDrag({ width, items, motionX });

  return (
    <Root
      className='relative h-full'
      style={{ width: itemWidth, left: -PADDING }}
    >
      <Dragger
        className='relative flex items-center h-full'
        whileHover={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
        style={{
          x: motionX,
          width: width + PADDING * 2,
          padding: PADDING,
        }}
        dragConstraints={{
          left: -width + itemWidth,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        {...dragHandlers}
      >
        <FillDark layout />
        <DragIcon />
        <div style={{ width: PADDING }} />
        <Items items={items} itemWidth={itemWidth} />
        <div style={{ width: PADDING }} />
        <DragIcon />
      </Dragger>
    </Root>
  );
};
