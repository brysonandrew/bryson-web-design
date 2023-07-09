import { MotionValue } from "framer-motion";
import { useWidth } from "./hooks/useWidth";
import { TMediaRecord } from "@t/media";

export type TWidth = ReturnType<typeof useWidth>["width"];
export type TBaseProps = {
  isReady: boolean;
  items: TMediaRecord[];
  count: number;
  readyCount: number;
  motionX: MotionValue;
  width: TWidth;
};
