import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  WIDTH,
  HEIGHT,
  PATTERN_ID,
} from "@components/effects/glitch/_cemetary/config";

const Root = styled(motion.rect)``;

type TProps = { scale: MotionValue<number> };
export const Background: FC<TProps> = ({ scale }) => (
  <Root
    x={0}
    y={0}
    width={WIDTH}
    height={HEIGHT}
    fill={`url(#${PATTERN_ID})`}
    style={{ scale }}
  />
);
