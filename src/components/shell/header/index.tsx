import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { Decoration } from './Decoration';
import { useContext } from '@state/Context';
import { Nav } from './Nav';
import { useCurrProject } from '@hooks/params/useCurrProject';

const Root = styled(motion.header)``;

export const Header: FC = () => {
  const { isScroll } = useContext();
  const currProject = useCurrProject();
  const isSource = Boolean(currProject);

  const isShown = !isScroll && !isSource;

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence>
        {isShown ? (
          <Nav key='NAV' />
        ) : (
          <Decoration key='DECORATION' />
        )}
      </AnimatePresence>
    </Root>
  );
};
