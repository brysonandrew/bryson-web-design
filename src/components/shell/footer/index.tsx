import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import {
  FOOTER_TRANSITION,
  FOOTER_TRANSITION_EXIT,
} from '@constants/animation';
import { useContext } from '@state/Context';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { Left } from './Left';
import { Settings } from './Settings';
import { RANGE_Z } from '@pages/index/build/images/hooks/useZ';
import { useCurrProject } from '@hooks/params/useCurrProject';

const Root = styled(motion.footer)``;

export const Footer = () => {
  const { isInit } = useContext();
  const project = useCurrProject();

  const initAnimation = {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: '0%' },
    exit: {
      opacity: 0,
      y: '100%',
      transition: FOOTER_TRANSITION_EXIT,
    },
    transition: FOOTER_TRANSITION,
  };

  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      {...(isInit ? initAnimation : {})}
      style={{ zIndex: project ? 0 : RANGE_Z }}
    >
      <FadeUp />
      <Left />
      <Settings />
    </Root>
  );
};
