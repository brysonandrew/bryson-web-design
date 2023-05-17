import styled from "@emotion/styled";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { TChildrenProps } from "./Motion";
import { MOTION_CONFIG } from "@constants/animation";

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Blinder: FC<TProps> = () => (
  <Root
    key="Blinder"
    className={clsx(
      "absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black-dark z-10 pointer-events-none opacity-60",
    )}
    variants={{ hover: { opacity: 0 } }}
    transition={{...MOTION_CONFIG, duration: 1.2}}
  />
);
