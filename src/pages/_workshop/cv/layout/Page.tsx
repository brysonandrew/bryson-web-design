import styled from "@emotion/styled";
import type { TChildren } from "lib/types/dom";
import { motion } from "framer-motion";
import type { CSSProperties, FC } from "react";
import { SIZE } from "../config/constants";

const Root = styled(motion.div)``;

type TProps = { children: TChildren, style?: CSSProperties };
export const Page: FC<TProps> = ({ children, style = {} }) => {
  return (
    <Root
      className="relative column-stretch shrink-0 bg-black-2 overflow-hidden"
      style={{ ...SIZE, ...style }}
    >
      {children}
    </Root>
  );
};
