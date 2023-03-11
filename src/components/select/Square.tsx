import type { FC } from "react";
import type {
  HTMLMotionProps,
  MotionStyle,
} from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import {
  CURSOR_SIZE,
  SELECT_LAYOUT_ID,
} from "../cursor/config";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  classValue?: ClassValue;
  style?: MotionStyle;
};
export const Square: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => (
  <Root
    initial={false}
    layoutId={SELECT_LAYOUT_ID}
    layout="size"
    style={{
      y: 0,
      x: 0,
      width: CURSOR_SIZE,
      height: CURSOR_SIZE,
      ...style,
    }}
    className={clsx(
      "fixed shadow-teal-md z-40 pointer-events-none cursor-crosshair",
      classValue,
    )}
    animate={{
      opacity: [1, 0.4],
    }}
    transition={{
      repeat: Infinity,
      repeatDelay: 0.4,
      repeatType: "reverse",
      duration: 2,
    }}
    {...props}
  />
);
