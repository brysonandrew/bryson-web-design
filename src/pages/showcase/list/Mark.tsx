import styled from "@emotion/styled";
import type COLORS from "@windi/config-colors.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = {
  color: keyof typeof COLORS;
};
export const Mark: FC<TProps> = ({ color }) => (
  <Root
    className={clsx(
      "absolute top-0 bottom-0 left-0 h-full w-2 z-50 opacity-50 pointer-events-none shadow-white-sm",
    )}
    style={{ backgroundColor: color }}
  />
);
