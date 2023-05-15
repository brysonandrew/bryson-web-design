import styled from "@emotion/styled";
import { resolveUrlId } from "@utils/resolveUrlId";
import { motion } from "framer-motion";
import type { FC } from "react";
import { PATTERN_ID } from "./pattern";
import { MORPH_ID } from "./morph";
import clsx, { ClassValue } from "clsx";

const Root = styled(motion.svg)``;
const Rect = styled(motion.rect)``;

type TProps = {
  classValue?: ClassValue;
};
export const Background: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx("absolute inset-0 z-0", classValue)}
    width="100%"
    height="100%"
  >
    <Rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill={resolveUrlId(PATTERN_ID)}
      filter={resolveUrlId(MORPH_ID)}
    />
  </Root>
);
