import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SELECT_LAYOUT_ID } from "../cursor/config";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";
import { MOTION_CONFIG } from "@constants/animation";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Bar: FC<TProps> = ({ classValue }) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    initial={false}
    animate={{
      opacity: [0, 1, 0],
      transition: {
        ...MOTION_CONFIG,
        repeat: Infinity,
        duration: 2,
      },
    }}
    className={clsx(
      "absolute left-0.5 -top-1 w-2 h-full mt-4 pointer-events-none rounded-sm cursor-default",
      classValue ?? "bg-teal-bright-08",
    )}
  />
);
