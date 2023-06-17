import type { FC } from "react";
import {
  useScroll,
  useTransform,
} from "framer-motion";
import type { HTMLMotionProps ,
  MotionValue} from "framer-motion";
import {
  DELAY,
  DELAY_2,
  FULL,
  GAP_1,
  GAP_2,
} from "../constants";

export type TChildrenProps = {
  xs: any[];
  opacityBlinders: MotionValue<number>;
};
type TProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: (props: TChildrenProps) => JSX.Element;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [GAP_1, GAP_2], FULL);
  const x1 = useTransform(
    scrollY,
    [GAP_1 + DELAY, GAP_2 + DELAY],
    FULL,
  );
  const x2 = useTransform(
    scrollY,
    [GAP_1 + DELAY_2, GAP_2 + DELAY_2],
    FULL,
  );
  const xs = [x, x1, x2];
  const opacityBlinders = useTransform(
    scrollY,
    [GAP_1 + DELAY_2, GAP_2 + DELAY_2],
    [1, 0],
  );

  return <>{children({ opacityBlinders, xs })}</>;
};
