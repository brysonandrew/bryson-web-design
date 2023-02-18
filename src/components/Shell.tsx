import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React from "react";
import { useResetScroll } from "../hooks/useResetScroll";
import type { TChildren } from "../types";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => {
  useResetScroll();
  return (
    <Root
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      {children}
    </Root>
  );
};
