import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TFake3DMotionChildrenProps } from '@components/animation/fake-3d/config';
import { useInView } from 'react-intersection-observer';
import { SECTIONS } from './config';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style, rect }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <Root
      ref={ref}
      className='relative w-core will-change-transform'
      style={{
        height: rect?.height,
        ...style,
      }}
    >
      <div className='column gap-24 text-xl text-g-bb px-4 md:px-0'>
        {SECTIONS.map((Section) => (
          <Section key={Section.name} />
        ))}
      </div>
    </Root>
  );
};
