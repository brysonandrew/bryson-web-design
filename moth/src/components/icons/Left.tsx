import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Left: FC<TProps> = ({ classValue }) => (
  <Root
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M14,7L9,12L14,17V7Z" />
  </Root>
);
