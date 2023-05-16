import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SELECT_LAYOUT_ID } from "../cursor/config";
import type { ClassValue } from "clsx";
import type { FC } from "react";
import { MOTION_CONFIG } from "@constants/animation";
import { BAR_CLASS } from "@pages/index/constants";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Bar: FC<TProps> = () => (
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
    className={BAR_CLASS}
  />
);
