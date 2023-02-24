import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SELECT_LAYOUT_ID } from "./cursor/config";
import clsx, { ClassValue } from "clsx";
import { FC } from "react";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Select: FC<TProps> = ({ classValue }) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    className={clsx(
      "absolute inset-0 pointer-events-none",
      classValue ?? "shadow-teal-sm",
    )}
  />
);
