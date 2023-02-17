import { motion } from "framer-motion";

import styled from "@emotion/styled";
import { Header } from "@components/Header";
import { About } from "./about";

const Root = styled(motion.div)``;

export const Index = () => (
  <Root className="bg-black">
    <Header />
    <About />
  </Root>
);
