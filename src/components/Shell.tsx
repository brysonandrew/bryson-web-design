import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "../types";
import { Background } from "./shell/background";
import { Header } from "./shell/header";
import { Footer } from "./shell/Footer";
import { BlindersOut } from "./blinders/BlindersOut";
import { HEADER_OFFSET_Y } from "@pages/about/constants";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <div className="text-black-dark-04">
    <Background />
    <Header />
    <Root
      className="relative bg-current mx-auto px-0 w-full overflow-hidden sm:overflow-visible md:w-mid lg:w-1/2 xl:w-2/3"
      style={{
        paddingTop: HEADER_OFFSET_Y,
        minHeight: "100vh",
      }}
    >
      {children}

      <BlindersOut />
    </Root>
    <Footer />
  </div>
);
