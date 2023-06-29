import { useContext } from '@state/Context';
import { Top } from './Top';
import { INIT_ANIMATION } from './constants';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Root = styled(motion.header)``;

export const Header = () => {
  const { isInit, isScrollStart } = useContext();

  return (
    <Root

      className='fixed top-0 left-0 flex items-center justify-between w-full px-3 py-2 sm:px-6 sm:py-4 z-50'
      {...(isInit || isScrollStart ? INIT_ANIMATION : {})}
    >
      <Top />
    </Root>
  );
};
