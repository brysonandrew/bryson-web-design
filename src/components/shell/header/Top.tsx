import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/text/main";
import { Nav } from "./Nav";

const Root = styled(motion.div)``;

export const Top = () => {
  const { scrollY } = useScroll();
  const bottom = useTransform(scrollY, [0, 100], [0, 6]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.6]);

  return (
    <Root
      className="relative flex items-center justify-between w-full"
      style={{ bottom, opacity }}
    >
      <Main />
      <Nav />
    </Root>
  );
};
