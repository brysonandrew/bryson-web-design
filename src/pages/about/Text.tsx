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
export const Text: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      "text-teal-bright text-left text-2xl px-3",
      classValue,
    )}
    style={{
      letterSpacing: 2,
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
