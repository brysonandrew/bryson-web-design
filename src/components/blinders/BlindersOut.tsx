import type { FC } from "react";
import { motion } from "framer-motion";
import type {
  HTMLMotionProps,
  MotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";

const CLASS =
  "absolute top-0 h-full from-black-dark z-10 pointer-events-none";

const Blinder = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  opacity?: MotionValue<number>;
};
export const BlindersOut: FC<TProps> = ({ opacity }) => (
  <>
    <Blinder
      className={clsx(CLASS, "left-full bg-gradient-to-r")}
      style={{ opacity, width: "25%" }}
    />
    <Blinder
      className={clsx(CLASS, "right-full bg-gradient-to-l")}
      style={{ opacity, width: "25%" }}
    />
  </>
);
