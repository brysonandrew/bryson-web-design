import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TFake3DMotionChildrenProps } from '@components/fake-3d/config';
import { useInView } from 'react-intersection-observer';
import { I } from '@components/Icon';
import { P2 } from '@components/space/P2';
import { P1 } from '@components/space/P1';
import { SECTIONS } from './config';
import { Section } from './Section';

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
      <div className='column gap-48 text-xl text-white'>
        {SECTIONS.map((sectionProps) => (
          <Section
            key={sectionProps.title}
            {...sectionProps}
          />
        ))}
      </div>
    </Root>
  );
};
