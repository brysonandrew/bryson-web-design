import type { FC } from "react";
import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ClassValue, clsx } from "clsx";
import {
  CURSOR_SIZE,
  SELECT_LAYOUT_ID,
} from "../cursor/config";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
  style?: MotionStyle;
};
export const Square: FC<TProps> = ({
  classValue,
  style,
}) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    style={{
      mixBlendMode: "difference",
      y: 0,
      x: 0,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
      ...style,
    }}
    className={clsx(
      "fixed shadow-teal-sm z-40 pointer-events-none",
      classValue,
    )}
  />
);
