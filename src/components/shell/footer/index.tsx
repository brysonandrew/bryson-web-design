import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  FOOTER_TRANSITION,
  FOOTER_TRANSITION_EXIT,
} from "@constants/animation";
import { useContext } from "@state/Context";
import { useDetectGPU } from "@react-three/drei";
import { Sound } from "./Sound";

const Root = styled(motion.footer)``;

export const Footer = () => {
  const { isMobile } = useDetectGPU();
  const { isInit } = useContext();

  const initAnimation = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: "0%" },
    exit: {
      opacity: 0,
      y: "100%",
      transition: FOOTER_TRANSITION_EXIT,
    },
    transition: FOOTER_TRANSITION,
  };

  return (
    <Root
      className="fixed bottom-2 right-1 w-full h-0 z-40"
      {...(isInit ? initAnimation : {})}
    >
      {!isMobile && <Sound />}
    </Root>
  );
};
