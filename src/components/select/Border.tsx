import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import { SELECT_LAYOUT_ID } from "../cursor/config";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Border: FC<TProps> = ({ classValue }) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    className={clsx(
      "absolute -inset-1 pointer-events-none rounded-sm cursor-default",
      classValue ?? "shadow-green-04",
    )}
  />
);
