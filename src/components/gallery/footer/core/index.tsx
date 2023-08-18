import { DragIcon } from './DragIcon';
import { MetalDark } from '@components/metal/MetalDark';
import { useDrag } from '../../../../hooks/gallery/useDrag';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TBaseProps } from '../../types';
import { Items } from './items';
import { PADDING_X } from './config';
import clsx from 'clsx';
import { isDesktop } from 'react-device-detect';
import { useKeys } from '@hooks/gallery/useKeys';

const Root = styled(motion.div)``;
const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { count, motionX, width, items } = props;
  useKeys({ readyCount: count });
  const itemWidth = width.footer / count;
  const dragHandlers = useDrag({
    width: width.footer,
    items,
    motionX,
  });

  const left = -width.footer + itemWidth;

  return (
    <Root className='relative' style={{ width: itemWidth }}>
      <MetalDark />
      <Dragger
        className={clsx('left-0 bottom-0', [
          isDesktop ? 'dragger-foot' : 'dragger-screen',
        ])}
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
        {isDesktop && (
          <>
            <MetalDark classValue='opacity-50' />
            <DragIcon classValue='left-0' />
            <DragIcon classValue='right-0' />
          </>
        )}
        <Items items={items} itemWidth={itemWidth} />
      </Dragger>
    </Root>
  );
};
