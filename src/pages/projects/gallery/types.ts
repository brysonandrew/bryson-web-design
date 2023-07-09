import { MotionValue } from "framer-motion";
import { TImageRecordEntries } from "@t/screens";
import { useWidth } from "./hooks/useWidth";

export type TWidth = ReturnType<typeof useWidth>["width"];
export type TBaseProps = {
  isReady: boolean;
  count: number;
  items: TImageRecordEntries;
  motionX: MotionValue;
  width: TWidth;
};
