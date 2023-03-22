import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h6)``;

type TProps = HTMLMotionProps<"h6"> & {
  classValue?: ClassValue;
};
export const TextXs: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "md:flex text-teal text-xxxs uppercase whitespace-nowrap",
      classValue ?? "text-teal-bright",
    )}
    style={{
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
