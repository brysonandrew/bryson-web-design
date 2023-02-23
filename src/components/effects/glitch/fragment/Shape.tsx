import type { FC } from "react";
import { motion } from "framer-motion";
import { FRAGMENT_ID } from "./config";

export type TFragmentShape = {
  width: number;
  x: number;
  height: number;
  y: number;
};
type TProps = TFragmentShape & {
  index: number;
  delay: number;
  duration: number;
};
export const Shape: FC<TProps> = ({
  index,
  x,
  y,
  width,
  height,
  delay,
  duration,
}) => {
  return (
    <motion.rect
      id={`${FRAGMENT_ID}-${index}`}
      x={`${x}%`}
      y={`${y}%`}
      width={`${width}%`}
      height={`${height}%`}
      // fill="none"
      // stroke="none"
    />
  );
};
