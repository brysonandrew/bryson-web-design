import type { FC } from "react";
import type { MotionValue} from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  HEIGHT_AND_OVERHANG,
  WIDTH_AND_OVERHANG,
  PATTERN_ID,
  GLITCH_ID,
} from "@components/effects/glitch/config";

const Root = styled(motion.rect)``;

type TProps = { scale: MotionValue<number> };
export const Background: FC<TProps> = ({ scale }) => (
    <Root
      x={0}
      y={0}
      width={WIDTH_AND_OVERHANG}
      height={HEIGHT_AND_OVERHANG}
      fill={`url(#${PATTERN_ID})`}
      filter={`url(#${GLITCH_ID})`}
      style={{ scale }}
    />
  );
