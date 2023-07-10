import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import {
  FOOTER_TRANSITION,
  FOOTER_TRANSITION_EXIT,
} from '@constants/animation';
import { useContext } from '@state/Context';
import { Sound } from './Sound';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { isMobile } from 'react-device-detect';
import { Left } from './Left';

const Root = styled(motion.footer)``;

export const Footer = () => {
  const { isInit } = useContext();

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
      className='fixed bottom-0 left-0 w-full h-0 z-50'
      {...(isInit ? initAnimation : {})}
    >
      <Left />
      <FadeUp />
      {!isMobile && <Sound />}
    </Root>
  );
};
