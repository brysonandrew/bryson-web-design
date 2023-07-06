import type { FC } from "react";
import { motion } from "framer-motion";
import type {
  HTMLMotionProps,
  MotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
const CLASS =
  "absolute w-20 h-full from-current z-10 pointer-events-none";

const Blinder = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  opacity?: MotionValue<number> | number;
};
export const Blinders: FC<TProps> = ({
  opacity,
  ...props
}) => (
  <>
    <Blinder
      className={clsx(CLASS, "left-0 bg-gradient-to-r")}
      style={{ opacity }}
      {...props}
    />
    <Blinder
      className={clsx(CLASS, "right-0 bg-gradient-to-l")}
      style={{ opacity }}
      {...props}
    />
  </>
);
