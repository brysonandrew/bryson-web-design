import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { ClassValue } from "clsx";
import type { FC } from "react";
import { MOTION_CONFIG } from "@constants/animation";
import { BAR_CLASS } from "@pages/index/constants";
const BAR_LAYOUT_ID = "BAR_LAYOUT_ID";

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Bar: FC<TProps> = () => (
  <Root
  
    layoutId={BAR_LAYOUT_ID}
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
