import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h2)``;

type TProps = HTMLMotionProps<"p"> & {
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
      "absolute -top-2 left-3 text-md08 text-teal-bright leading-none",
      classValue,
    )}
    style={{
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
