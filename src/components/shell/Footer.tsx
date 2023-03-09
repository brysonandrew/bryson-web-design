import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { useContext } from "@state/Context";

const Root = styled(motion.footer)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;
const Sub = styled(motion.h2)``;

export const Footer = () => {
  const { isInit } = useContext();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const scaleBackground = useTransform(
    scrollY,
    [0, 100],
    [0, 4],
  );

  const subText = "ᴅᴇᴠᴠɪɴɢ sɪɴᴄᴇ 2014";

  return (
    <Root className="flex bg-black items-center justify-between fixed bottom-0 left-0 w-full px-4 pt-4 pb-5 z-40 pointer-events-none">
      <BackgroundFade
        style={{
          scaleY: scaleBackground,
          originY: "100%",
          originX: 0,
        }}
        className="absolute w-full bottom-full left-0 w-full h-full from-current bg-gradient-to-t border-current"
      />
      <Background className="absolute w-full inset-0 bg-current border-teal-04 backdrop-blur-lg" />
      <Border className="absolute top-0 left-0 h-px w-full bg-teal-bright-08" />
      <Sub className="hidden md:flex relative text-sm text-teal whitespace-nowrap leading-none">
        {isInit ? (
          <Typewriter wip={subText}>
            {(content) => <>{content}</>}
          </Typewriter>
        ) : (
          <>{subText}</>
        )}
      </Sub>
    </Root>
  );
};
