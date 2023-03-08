import type { FC } from "react";
import { motion } from "framer-motion";
import type {
  HTMLMotionProps,
  MotionValue,
} from "framer-motion";
import styled from "@emotion/styled";

const Blinder = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  opacity: MotionValue<number>;
};
export const Blinders: FC<TProps> = ({ opacity }) => (
  <>
    <Blinder
      className="absolute left-0 w-20 h-full bg-gradient-to-r from-black-dark z-10"
      style={{ opacity }}
    />
    <Blinder
      className="absolute right-0 w-20 h-full bg-gradient-to-l from-black-dark z-10"
      style={{ opacity }}
    />
  </>
);
