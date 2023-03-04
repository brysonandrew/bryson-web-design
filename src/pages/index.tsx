import { Header } from "@components/Header";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { About } from "./about";
import { HEADER_OFFSET_Y } from "./about/constants";

const Root = styled(motion.div)``;

export const Index = () => (
  <>
    <Header />
    <Root
      className="relative w-mid bg-black-dark mx-auto px-0"
      style={{ paddingTop: HEADER_OFFSET_Y }}
    >
      <About />
    </Root>
  </>
);
