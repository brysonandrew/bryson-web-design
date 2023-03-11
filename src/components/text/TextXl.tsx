import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.p)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

type TProps = HTMLMotionProps<"p"> & {
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
      "text-black text-left px-2 tracking-widest xl:px-4",
      classValue ?? "text-2xl sm:text-3xl xl:text-4xl ",
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
