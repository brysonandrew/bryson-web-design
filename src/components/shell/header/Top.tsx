import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/shell/header/main";
import { Nav } from "./Nav";

const Root = styled(motion.div)``;

export const Top = () => (
    <Root className="relative flex items-center justify-between w-full">
      <Main />
      <Nav />
    </Root>
  );
