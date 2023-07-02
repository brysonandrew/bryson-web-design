import { useRef } from "react";
import type { FC, RefObject } from "react";
import type {
  HTMLMotionProps} from "framer-motion";
import {
  motion,
} from "framer-motion";
import type { TChildren } from "@t/index";

type TProps = HTMLMotionProps<"li"> & {
  children: TChildren;
};
export const Section: FC<TProps> = ({
  children,
  ...props
}) => {
  const ref = useRef<HTMLLIElement | null>(null);
  return (
    <motion.li
      ref={ref}
      className="absolute"
      {...props}
    >
      {children}
    </motion.li>
  );
};
