import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { MainTitle } from "@components/text/MainTitle";
import { Contact } from "@components/Contact";

const Root = styled(motion.footer)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;
const Right = styled(motion.div)``;
const Sub = styled(motion.h2)``;

export const Footer = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const xMain = useTransform(scrollY, [0, 100], [0, -28]);
  const xSub = useTransform(scrollY, [0, 100], [0, -100]);
  const scaleText = useTransform(
    scrollY,
    [0, 100],
    [1, 0.7],
  );
  const scaleBackground = useTransform(
    scrollY,
    [0, 100],
    [0, 2],
  );

  return (
    <Root className="flex items-center justify-between fixed bottom-0 left-0 w-full px-4 pt-4 pb-5 z-40">
      <BackgroundFade
        style={{
          scaleY: scaleBackground,
          originY: "100%",
          originX: 0,
        }}
        className="absolute w-full bottom-full left-0 w-full h-full from-transparent bg-gradient-to-t border-teal-04 backdrop-blur-lg"
      />
      <Background className="absolute w-full inset-0 bg-black-dark border-teal-04 backdrop-blur-lg" />
      <Border
        style={{ scaleX: opacity }}
        className="absolute top-0 left-0 h-px w-full bg-teal-bright-08"
      />
      <Sub className="hidden md:flex relative text-sm text-teal whitespace-nowrap leading-none">
        <Typewriter delay={150} wip="ᴅᴇᴠᴠɪɴɢ sɪɴᴄᴇ 2014">
          {(content) => <>{content}</>}
        </Typewriter>
      </Sub>
    </Root>
  );
};
