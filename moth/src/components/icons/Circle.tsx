import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Circle: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="currentColor"
  >
    <circle r="6" cx="6" cy="6" />
  </Root>
);
