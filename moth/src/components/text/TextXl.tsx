import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h3)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

type TProps = HTMLMotionProps<"h3"> & {
  classValue?: ClassValue;
};
export const TextXl: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "text-black text-left px-2 tracking-widest text-8xl sm:text-12xl xl:text-16xl xl:px-4",
      classValue,
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
