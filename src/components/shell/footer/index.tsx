import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
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
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;

export const Footer = () => {
  const { isMobile } = useDetectGPU();
  const { isInit } = useContext();
  const { scrollY } = useScroll();
  const scaleBackground = useTransform(
    scrollY,
    [0, 100],
    [0, 4],
  );
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 40],
    [1, 0.4],
  );
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0.2],
  );
  const subText = "ᴅᴇᴠᴇʟᴏᴘɪɴɢ ᴏɴ ᴛʜᴇ ᴡᴇʙ sɪɴᴄᴇ 2014";

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
        <BackgroundFade
          style={{
            scaleY: scaleBackground,
            originY: "100%",
            originX: 0,
          }}
          className="absolute w-full bottom-full left-0 w-full h-full from-current bg-gradient-to-t border-current"
        />
        <Background
          style={{ opacity: backgroundOpacity }}
          className="absolute w-full inset-0 bg-black-dark"
        />
        <Border
          style={{ opacity: borderOpacity }}
          className="absolute top-0 left-0 h-px w-full bg-teal-bright-08"
        />
        <Sub classValue="px-3">{subText}</Sub>
      </div>
      {!isMobile && <Sound />}
    </Root>
  );
};
