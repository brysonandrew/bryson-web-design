import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { About } from "./about";
import { Header } from "./about/Header";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Root = styled(motion.div)``;

export const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <Root className="bg-black">
      <Header />
      <div id="#about">
        <About />
      </div>
    </Root>
  );
};
