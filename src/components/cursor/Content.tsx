import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import type { TCursorProps } from "./trail";
import { CONTENT_CLASS } from "./config";

const Root = styled(motion.div)``;

type TProps = TCursorProps & {
  classValue?: ClassValue;
};
export const Content: FC<TProps> = ({
  classValue,
  children,
}) => (
  <Root
    className={clsx(
      CONTENT_CLASS,
      classValue
    )}
  >
    {children}
  </Root>
);
