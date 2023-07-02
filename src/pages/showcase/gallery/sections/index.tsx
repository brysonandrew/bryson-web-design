import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Section } from './Section';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY } from '@constants/animation';
import { FOOTER_SIZE } from './constants';
import { Image } from './image';
import type { TMedia } from '@pages/showcase/config';
import { Filter } from './Filter';
import { TBaseProps } from '../types';

export const Root = styled(motion.div)``;

type TProps = TBaseProps & {
  width: number;
};
export const Sections: FC<TProps> = (props) => {
  const { items, count, motionX, width } = props;

  const left = useTransform(
    motionX,
    (v) => `${(-v * count * 100) / width + 50}vw`,
  );
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Root
      key='Sections'
      ref={ref}
      className='min-h-screen mx-auto'
      style={{ width, left }}
      {...PRESENCE_OPACITY}
    >
      <Filter motionX={motionX} />
      <motion.ul
        className='absolute flex'
        style={{ left, top: 40 }}
      >
        {items.map((item: TMedia, index: number) => (
          <Section
            key={item.key}
            root={ref}
            style={{
              left: `${-index * 100}vw`,
              x: '-50%',
              width,
              height: `calc(100vh - ${FOOTER_SIZE}px)`,
            }}
          >
            <Image item={item} />
          </Section>
        ))}
      </motion.ul>
    </Root>
  );
};
