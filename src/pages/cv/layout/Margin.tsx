import styled from "@emotion/styled";
import { TChildren } from "@t/index";
import { motion } from "framer-motion";
import { FC } from "react";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Margin: FC<TProps> = ({ children }) => {
  return <Root className="relative w-3/4">{children}</Root>;
};
