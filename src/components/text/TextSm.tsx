import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.p)``;

type TProps = HTMLMotionProps<"p"> & {
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
      "text-teal-bright text-left text-xs px-4 uppercase whitespace-normal sm:text-sm  xl:text-md",
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
