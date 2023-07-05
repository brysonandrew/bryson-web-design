import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import { motion } from 'framer-motion';
import { useState, type FC, useRef } from 'react';
import { Zoom } from './Zoom';
import { TBaseProps } from '../../types';
import { TChildren } from '@t/index';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  item: TMedia;
  image: HTMLImageElement | null;
  children: TChildren;
};
export const Control: FC<TProps> = ({
  item,
  image,
  width,
  children,
}) => {
  const [isHover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const element = ref.current;
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <motion.div
      ref={ref}
      className='relative'
      style={{ width: width.footer }}
      onPointerDown={(e) => e.preventDefault()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHover && image && element && (
        <Zoom
          key={item.key}
          element={element}
          image={image}
          media={item}
        />
      )}
    </motion.div>
  );
};
