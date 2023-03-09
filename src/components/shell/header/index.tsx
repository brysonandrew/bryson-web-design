import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Contact } from "@components/Contact";
import { MainTitle } from "@components/text/MainTitle";
import { Sub } from "./Sub";

const Root = styled(motion.header)``;
const Background = styled(motion.div)``;
const BackgroundFade = styled(motion.div)``;
const Border = styled(motion.div)``;

const List = styled(motion.ul)``;

export const Header = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 40], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const scaleY = useTransform(scrollY, [0, 100], [0, 2]);

  return (
    <Root className="flex bg-black  items-center justify-between fixed top-0 left-0 w-full px-4 pt-4 pb-5 z-40">
      <BackgroundFade
        style={{
          scaleY,
          originY: 0,
          originX: 0,
        }}
        className="absolute w-full top-full left-0 w-full h-full from-current bg-gradient-to-b border-teal-04 backdrop-blur-lg"
      />
      <Background className="absolute w-full inset-0 bg-current border-teal-04 backdrop-blur-lg" />
      <Border className="absolute bottom-0 left-0 h-px w-full bg-teal-bright-08" />
      <div className="flex items-center">
        <MainTitle {...{ scale, x }} />
        <Sub />
      </div>
      <List className="flex items-center mt-0.5">
        <Contact />
      </List>
    </Root>
  );
};
