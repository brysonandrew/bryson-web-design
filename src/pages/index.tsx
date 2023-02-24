import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Shell } from "@components/Shell";
import { Header } from "@components/Header";
import { About } from "./about";

const Root = styled(motion.div)``;
 
export const Index = () => (
  <Shell>
    <Header />
    <Root id="#about">
      <About />
    </Root>
  </Shell>
);
