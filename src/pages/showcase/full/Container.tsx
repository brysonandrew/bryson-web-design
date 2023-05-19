import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"div"> & {
  id: string;
  children?: TChildren;
  classValue: ClassValue;
};
export const Container: FC<TProps> = ({
  classValue,
  children,
  id,
  ...props
}) => (
  <Root
    className={clsx("inset-0 rounded-sm z-10", classValue)}
    layoutId={id}
    style={{ backgroundColor: "rgba(28,28,28, 0.7)" }}
    {...props}
  >
    {children}
  </Root>
);
