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
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const xy = { x: cursorX, y: cursorY };

  return (
    <Root
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black flex flex-col items-center"
    >
      <Background {...xy} />
      {children}
      <Cursor x={cursorX} y={cursorY} />
    </Root>
  );
};
 