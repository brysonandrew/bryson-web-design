import { MotionValue } from "framer-motion";
import { TMedia } from "../config";

export type TBaseProps = {
  isReady: boolean;
  items: TMedia[];
  count: number;
  motionX: MotionValue;
  width: number;
};
