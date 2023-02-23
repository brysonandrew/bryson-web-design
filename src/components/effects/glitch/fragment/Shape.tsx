import type { FC } from "react";
import { motion } from "framer-motion";
import { FRAGMENT_ID } from "./config";

type TProps = { index: number; duration: number };
export const Shape: FC<TProps> = ({ index, duration }) => {
  const width = Math.random() * 20;
  const x = (100 - width) * Math.random();

  const height = Math.random() * 20;
  const y = (100 - width) * Math.random();

  return (
    <motion.rect
      id={`${FRAGMENT_ID}-${index}`}
      x={`${x}%`}
      y={`${y}%`}
      width={`${width}%`}
      height={`${height}%`}
    />
  );
};
