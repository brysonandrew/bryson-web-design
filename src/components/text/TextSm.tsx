import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.h6)`
`;

type TProps = HTMLMotionProps<"h6"> & {
  classValue?: ClassValue;
};
export const TextSm: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "text-left text-xs uppercase text-teal-bright whitespace-normal sm:text-md xl:text-lg truncate",
      classValue ?? "px-4",
    )}
    style={{
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
