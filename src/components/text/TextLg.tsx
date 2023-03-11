import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.p)`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
`;

type TProps = HTMLMotionProps<"p"> & {
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
      "text-black text-left text-1xl px-2 tracking-widest sm:text-2xl xl:text-3xl xl:px-4",
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
