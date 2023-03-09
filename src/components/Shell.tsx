import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "../types";
import { Background } from "./shell/background";
import { Header } from "./shell/header";
import { Footer } from "./shell/Footer";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <>
    <Background />
    <Header />
    {children}
    <Footer />
  </>
);
