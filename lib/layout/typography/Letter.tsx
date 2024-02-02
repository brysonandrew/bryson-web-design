import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

type TProps = HTMLMotionProps<"h5"> & {
  classValue?: ClassValue;
};
export const Letter: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <motion.h5
    className={clsx(
      "text-highlight text-left text-lg tracking-wide px-3 sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl",
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </motion.h5>
);
