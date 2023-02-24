import type { FC } from "react";
import { motion } from "framer-motion";
import { SWEEP_ID } from "./config";

type TProps = { index: number; duration: number };
export const Shape: FC<TProps> = ({ index, duration }) => {
  const height = 1 + Math.random() * 2;
  return (
    <motion.rect
      id={`${SWEEP_ID}-${index}`}
      x="0%"
      y="0%"
      width="100%"
      height={`${height}%`}
      // fill="none"
      // stroke="none"
    >
      <animate
        attributeName="y"
        values="0;100%;0"
        dur={`${duration}s`}
        repeatCount="indefinite"
      />
    </motion.rect>
  );
};
