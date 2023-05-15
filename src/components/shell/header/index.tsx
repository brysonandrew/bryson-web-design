import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/text/main";
import { useContext } from "@state/Context";
import { Nav } from "./Nav";
import { Decoration } from "./Decoration";
import { INIT_ANIMATION } from "./constants";
import { Top } from "./Top";

const Root = styled(motion.header)``;

export const Header = () => {
  const { isInit } = useContext();
  return (
    <Root
      className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-4 z-50"
      {...(isInit ? INIT_ANIMATION : {})}
    >
      <Decoration />
      <Top />
    </Root>
  );
};
