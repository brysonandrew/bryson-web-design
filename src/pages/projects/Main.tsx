import { FC } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { List } from './list';
import { PROJECT_ITEMS } from '@pages/projects/config/constants/items';
import { TFake3DMotionChildrenProps } from '@components/animation/fake-3d/config';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { Tips } from './Tips';
import { useInView } from 'react-intersection-observer';
import { isDesktop } from 'react-device-detect';

const Root = styled(motion.div)``;

type TProps = Partial<TFake3DMotionChildrenProps>;
export const Main: FC<TProps> = ({ style, rect }) => {
  const currProject = useCurrProject();
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
      <List
        items={PROJECT_ITEMS}
        currProject={currProject}
      />
      {!isDesktop && (
        <AnimatePresence>
          {!currProject && inView && <Tips key='TIPS' />}
        </AnimatePresence>
      )}
    </Root>
  );
};
