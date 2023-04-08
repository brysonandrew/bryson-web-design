import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildren } from "../../types";
import { Header } from "./header";
import { Footer } from "./footer";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <Root>
    {children}
    <Header />
    <Footer />
  </Root>
);
