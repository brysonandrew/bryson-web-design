import type { Point } from "framer-motion";

export const DELIMITER = "|";

export const resolveCollisionKey = ({ x, y }: Point) =>
  `${Math.round(x)}${DELIMITER}${Math.round(y)}`;
