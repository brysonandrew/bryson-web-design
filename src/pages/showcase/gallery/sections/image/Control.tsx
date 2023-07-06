import styled from '@emotion/styled';
import type { TMedia, TMediaRecord } from '@pages/showcase/config';
import { motion } from 'framer-motion';
import { useState, type FC, useRef } from 'react';
import { Zoom } from './zoom/Zoom';
import { TBaseProps } from '../../types';
import { TChildren } from '@t/index';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  mediaRecord: TMediaRecord;
  image: HTMLImageElement | null;
  children: TChildren;
};
export const Control: FC<TProps> = ({
  mediaRecord,
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
          key={mediaRecord.png.key}
          element={element}
          image={image}
          mediaRecord={mediaRecord}
        />
      )}
    </motion.div>
  );
};
