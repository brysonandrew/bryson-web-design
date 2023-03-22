import type { TMedia } from "@pages/showcase/config";
import type { MotionValue } from "framer-motion";

export type TBase = "gallery" | "showcase";

export type TBaseProps = {
  width: number;
  items: TMedia[];
  count: number;
  itemWidth: number;
  motionX: MotionValue;
  base: TBase;
};
 