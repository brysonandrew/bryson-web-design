import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "../types";
import { Cursor } from "./cursor";
import { Background } from "./Background";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => (
  <Root
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="bg-black overflow-hidden w-full"
  >
    <Background />
    {children}
    <Cursor />
  </Root>
);
 