import styled from "@emotion/styled";
import { TChildren } from "@t/index";
import clsx, { ClassValue } from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
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
    className={clsx(
      "flex flex-col inset-0 px-8 py-4 shadow-teal-04-sm bg-black-09 backdrop-blur-xl p-4 z-10",
      classValue,
    )}
    layoutId={id}
    {...props}
  >
    {children}
  </Root>
);
