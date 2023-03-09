import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.p)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  /* font-family: Didito */
`;

type TProps = HTMLMotionProps<"p"> & {
  classValue?: ClassValue;
};
export const Text: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "text-teal-bright text-left text-lg tracking-widest px-3 sm:text-2xl xl:text-3xl",
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
