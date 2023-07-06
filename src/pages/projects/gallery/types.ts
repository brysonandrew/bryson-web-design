import { MotionValue } from "framer-motion";
import { TMediaRecord } from "../config";
import { useWidth } from "./hooks/useWidth";

export type TWidth = ReturnType<typeof useWidth>["width"];
export type TBaseProps = {
  isReady: boolean;
  items: TMediaRecord[];
  count: number;
  readyCount: number;
  motionX: MotionValue;
  width: TWidth;
};
