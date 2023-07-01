import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import { motion } from "framer-motion";
import type { CSSProperties, FC } from "react";
import { SIZE } from "../constants";

const Root = styled(motion.div)``;

type TProps = { children: TChildren, style?: CSSProperties };
export const Page: FC<TProps> = ({ children, style = {} }) => {
  return (
    <Root
      className="flex flex-col items-center pt-18 bg-black overflow-hidden"
      style={{ ...SIZE, ...style }}
    >
      {children}
    </Root>
  );
};
