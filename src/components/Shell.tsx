import type { FC } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "../types";
import { Background } from "./Background";
import { Cursor } from "./cursor";

const Root = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  return (
    <Root
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <Background  />
      {children}
      <Cursor />
    </Root>
  );
};
