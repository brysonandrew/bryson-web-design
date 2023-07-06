import { DragIcon } from './DragIcon';
import { FillDark } from '@components/metal/FillDark';
import { useDrag } from '../../hooks/useDrag';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useKeys } from '../../hooks/useKeys';
import { TBaseProps } from '../../types';
import { Items } from './items';
import { PADDING_X } from './config';
import { TEAL_GLOW_BOX_SHADOW } from '@pages/index/constants';
import clsx from 'clsx';

const Root = styled(motion.div)``;
const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { items, count, readyCount, motionX, width } =
    props;
  useKeys({ readyCount });
  const itemWidth = width.footer / count;
  const dragHandlers = useDrag({
    width: width.footer,
    items,
    motionX,
  });

  const left = -width.footer + itemWidth;

  return (
    <Root
      className='relative'
      style={{ width: itemWidth }}
    >
      <FillDark />
      <Dragger
        className={clsx(
          'relative flex items-center',
          TEAL_GLOW_BOX_SHADOW,
        )}
        style={{
          x: motionX,
          left: -PADDING_X,
          width: width.footer + PADDING_X * 2,
          padding: `0.25rem ${PADDING_X}px`,
        }}
        dragConstraints={{
          left,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        {...dragHandlers}
      >
        <FillDark classValue='opacity-50' />
        <DragIcon classValue='left-0' />
        <Items items={items} itemWidth={itemWidth} />
        <DragIcon classValue='right-0' />
      </Dragger>
    </Root>
  );
};
