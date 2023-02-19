import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { Shell } from "@components/Shell";
import { About } from "./about";
import { Header } from "@components/Header";

const Root = styled(motion.div)``;

export const Index = () => (
  <Shell>
    <Header />
    <Root id="#about">
      <About />
    </Root>
  </Shell>
);
