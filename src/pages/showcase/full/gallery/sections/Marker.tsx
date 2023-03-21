import { motion } from "framer-motion";
import type { FC } from "react";

type TProps = {
  itemWidth: number;
};
export const Marker: FC<TProps> = ({ itemWidth }) => (
    <motion.div
      className="absolute top-0 left-1/2 bg-white-01 h-full py-4"
      style={{ width: itemWidth, x: "-50%" }}
    />
  );
