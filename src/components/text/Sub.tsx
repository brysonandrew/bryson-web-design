import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h2)``;

type TProps = HTMLMotionProps<"h2"> & {
  classValue?: ClassValue;
};
export const Sub: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "relative top-0 left-0 text-teal-bright leading-none",
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </Root>
);
