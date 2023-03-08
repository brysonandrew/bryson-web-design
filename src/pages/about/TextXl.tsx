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
      "text-black text-left text-3xl px-4",
      classValue,
    )}
    style={{
      letterSpacing: 6,
      lineHeight: 1,
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
