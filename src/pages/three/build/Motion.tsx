import { useEffect, type FC } from "react";
import {
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type {
  HTMLMotionProps,
  MotionValue,
} from "framer-motion";
import { DELAY, DELAY_2, FULL, GAP_1 } from "../constants";
import { useContext } from "@state/Context";

export type TChildrenProps = {
  xs: MotionValue<string>[];
  opacityBlinders: MotionValue<number>;
};
type TProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: (props: TChildrenProps) => JSX.Element;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { isInit } = useContext();
  const motion = useMotionValue(0);
  const endTime = GAP_1 + DELAY_2;

  useEffect(() => {
    if (isInit) {
      animate(motion, endTime, {
        duration: 1.8,
        ease: "easeIn",
      });
    } else {
      motion.set(endTime);
    }
  }, []);

  const x = useTransform(motion, [0, GAP_1], FULL);
  const x1 = useTransform(
    motion,
    [DELAY, GAP_1 + DELAY],
    FULL,
  );
  const x2 = useTransform(
    motion,
    [DELAY_2, GAP_1 + DELAY_2],
    FULL,
  );

  const xs = [x, x1, x2];

  const opacityBlinders = useTransform(
    motion,
    [DELAY_2, GAP_1 + DELAY_2],
    [1, 0],
  );

  return <>{children({ opacityBlinders, xs })}</>;
};
