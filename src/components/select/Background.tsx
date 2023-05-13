import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SELECT_LAYOUT_ID } from "../cursor/config";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Background: FC<TProps> = ({ classValue }) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    className={clsx(
      "absolute inset-0 pointer-events-none rounded-sm cursor-default",
      classValue ?? "bg-red-01",
    )}
  />
);
