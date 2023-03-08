import { Header } from "./Header";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { HEADER_OFFSET_Y } from "./about/constants";
import { About } from "./about";
import { Footer } from "./Footer";

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
    <Footer />
  </>
);
