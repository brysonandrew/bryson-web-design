import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h4)`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
`;

type TProps = HTMLMotionProps<"h4"> & {
  classValue?: ClassValue;
};
export const TextLg: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "text-left px-2 tracking-widest text-4xl sm:text-5xl xl:text-6xl xl:px-4",
      classValue ?? "text-black",
    )}
    style={{
      lineHeight: 1,
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
