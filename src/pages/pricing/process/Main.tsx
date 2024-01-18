import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TParallaxMotionChildrenProps } from 'lib/animation/components/parallax/config';
import { SECTIONS } from './config';

const Root = styled(motion.div)``;

type TProps = Partial<TParallaxMotionChildrenProps>;
export const Main: FC<TProps> = ({ style, rect }) => {
  return (
    <Root
      className='relative w-core will-change-transform'
      style={{
        height: rect?.height,
        ...style,
      }}
    >
      <div className='column gap-24 text-xl  px-4 md:px-0'>
        {SECTIONS.map((Section) => (
          <Section key={Section.name} />
        ))}
      </div>
    </Root>
  );
};
