import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import { SELECT_LAYOUT_ID } from "../cursor/config";
import { MOTION_CONFIG } from "@constants/animation";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Pulse: FC<TProps> = ({ classValue }) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    className={clsx(
      "absolute inset-0 pointer-events-none rounded-sm cursor-default",
      classValue ?? "shadow-red-04",
    )}
    initial={false}
    style={{ originX: "50%", originY: "50%" }}
    animate={{
      opacity: [1, 0],
      scaleY: [1, 2.4],
      scaleX: [1, 1.15],
    }}
    transition={{
      ...MOTION_CONFIG,
      repeat: Infinity,
      duration: 1.4,
    }}
  />
);
