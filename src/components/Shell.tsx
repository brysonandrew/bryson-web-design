import styled from "@emotion/styled";
import { HEADER_OFFSET_Y } from "@pages/index/constants";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildren } from "../types";
import { BlindersOut } from "./blinders/BlindersOut";
import { Footer } from "./shell/Footer";
import { Header } from "./shell/header";

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <Root className="relative text-black-dark-04 overflow-hidden z-10">
    <Header />
    <Content
      key="Content"
      className="relative bg-current mx-auto px-0 w-full overflow-hidden sm:overflow-visible md:w-core lg:w-core-lg xl:w-core-xl xxl:w-core-xxl"
      style={{
        paddingTop: HEADER_OFFSET_Y,
        minHeight: "100vh",
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      {children}
      <BlindersOut />
    </Content>
    <Footer />
  </Root>
);
