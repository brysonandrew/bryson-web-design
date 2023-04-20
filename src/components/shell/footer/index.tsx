import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  FOOTER_TRANSITION,
  FOOTER_TRANSITION_EXIT,
} from "@constants/animation";
import { useContext } from "@state/Context";
import { Sub } from "@components/text/Sub";
import { Sound } from "./Sound";
import { useDetectGPU } from "@react-three/drei";

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
      className="flex items-center justify-between fixed bottom-0 left-0 w-full px-4 pt-4 pb-5 z-40"
      {...(isInit ? initAnimation : {})}
    >
      <div className="relative">
        <>
          <Sub classValue="px-3">ᴅᴇᴠᴇʟᴏᴘɪɴɢ ᴏɴ ᴛʜᴇ</Sub>
          <div className="py-0.5" />
          <Sub classValue="px-3">ᴡᴇʙ sɪɴᴄᴇ 2014</Sub>
        </>
      </div>
      {!isMobile && <Sound />}
    </Root>
  );
};
