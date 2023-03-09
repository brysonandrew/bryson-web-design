import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "../../types";
import { HEADER_OFFSET_Y } from "@pages/about/constants";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BlindersOut } from "@components/blinders/BlindersOut";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <>
    <Header />
    <Root
      className="relative bg-black-dark mx-auto px-0 w-full overflow-hidden sm:overflow-visible md:w-mid lg:w-1/2 xl:w-2/3"
      style={{
        paddingTop: HEADER_OFFSET_Y,
        minHeight: "100vh",
      }}
    >
      {children}
      <BlindersOut />
    </Root>
    <Footer />
  </>
);
