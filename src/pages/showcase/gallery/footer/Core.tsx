import { Button } from './Button';
import { DragIcon } from './DragIcon';
import { FillDark } from '@components/metal/FillDark';
import { useDrag } from '../hooks/useDrag';
import { resolveTo } from '../hooks/resolveTo';
import { useLocation } from 'react-router';
import { PADDING } from '../sections/constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useKeys } from '../hooks/useKeys';
import { TBaseProps } from '..';

const Root = styled(motion.div)``;
export const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { items, count, motionX, width } = props;
  useKeys({ count });
  const { pathname } = useLocation();
  const itemWidth = width / count;
  const dragHandlers = useDrag({ width, items, motionX });

  return (
    <Root
      className='relative h-full'
      style={{ width: itemWidth, left: -PADDING }}
      layout
    >
      <Dragger
        className='relative flex items-center h-full shadow-teal-02-sm'
        layout
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
        {items
          .sort((a, b) => {
            const an = +a.img;
            const bn = +b.img;

            if (an < bn) {
              return -1;
            }
            if (bn < an) {
              return 1;
            }
            return 0;
          })
          .map(({ key, name, img }) => (
            <Button
              key={key}
              name={img}
              to={resolveTo({ img, name, pathname })}
              itemWidth={itemWidth}
            />
          ))}
        <div style={{ width: PADDING }} />
        <DragIcon />
      </Dragger>
    </Root>
  );
};
