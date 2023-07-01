import styled from '@emotion/styled';
import {
  metalRadialDarkCss,
  metalRadialDarkestCss,
} from '@css/metal';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useDrag } from '../hooks/useDrag';
import { resolveTo } from '../hooks/resolveTo';
import {
  FOOTER_SIZE,
  PADDING,
} from '../sections/constants';
import type { TBaseProps } from '../types';
import { Button } from './Button';
import { DragIcon } from './DragIcon';

export const Root = styled(motion.footer)``;

const Center = styled(motion.div)``;

export const Dragger = styled(motion.div)``;

export const MetalBackground = styled(motion.div)`
  ${metalRadialDarkestCss}
`;

export const Metal = styled(motion.div)`
  ${metalRadialDarkCss}
`;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { width, items, motionX, itemWidth, base } = props;
  const dragHandlers = useDrag(props);

  return (
    <Root
      className='flex justify-center fixed bottom-0 w-full bg-black-9 backdrop-blur-sm'
      style={{ height: FOOTER_SIZE }}
    >
      <MetalBackground className='absolute inset-0' />
      <Center
        className='relative h-full'
        style={{ width: itemWidth, left: -PADDING }}
      >
        <Dragger
          className='relative flex items-center h-full shadow-teal-02-sm'
          whileHover={{ cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
          initial={false}
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
          <Metal className='absolute inset-0' />
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
                to={resolveTo({ img, name, base })}
                itemWidth={itemWidth}
              />
            ))}
          <div style={{ width: PADDING }} />
          <DragIcon />
        </Dragger>
        <div className='py-2' />
      </Center>
    </Root>
  );
};
