import styled from "@emotion/styled";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildrenProps } from "./Motion";
import { MOTION_CONFIG } from "@constants/animation";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Line: FC<TProps> = () => (
  <Root
    key="Line"
    className={clsx(
      "absolute left-0 bottom-0 w-full h-px z-10 pointer-events-none bg-gray",
    )}
    transition={{...MOTION_CONFIG, duration: 1.2}}
  />
);
