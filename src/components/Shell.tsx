import styled from "@emotion/styled";
import { HEADER_OFFSET_Y } from "@pages/index/constants";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildren } from "../types";
import { BlindersOut } from "./blinders/BlindersOut";
import { Footer } from "./shell/footer";
import { Header } from "./shell/header";
import { PRESENCE_OPACITY_SHIFT } from "@constants/animation";

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <Root className="relative text-black-dark-04 overflow-visible z-10">
    <Header />
    <Content
      key="Content"
      className="relative bg-current mx-auto px-0 w-full overflow-visible sm:overflow-visible md:w-core lg:w-core-lg xl:w-core-xl xxl:w-core-xxl"
      style={{
        paddingTop: HEADER_OFFSET_Y,
        minHeight: "100vh",
      }}
      {...PRESENCE_OPACITY_SHIFT}
    >
      {children}
      <BlindersOut />
    </Content>
    <Footer />
  </Root>
);
