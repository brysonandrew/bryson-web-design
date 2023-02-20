import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import type { TCursorProps } from ".";
import { DOT_CLASS } from "./config";

const Root = styled(motion.div)``;

type TProps = TCursorProps & {
  classValue?: ClassValue;
};
export const Dot: FC<TProps> = ({
  classValue,
  children,
}) => (
  <Root className={clsx(DOT_CLASS, classValue)}>
    {children}
  </Root>
);
