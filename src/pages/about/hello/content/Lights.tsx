import type { FC } from "react";
import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import styled from "@emotion/styled";
import {
  OVERHANG,
  HEIGHT_AND_OVERHANG,
  WIDTH_AND_OVERHANG,
} from "@components/effects/glitch/config";
import { GLOW_ID } from "@components/effects/glow/config";
import COLORS from "../../../../../tailwind.config-colors.json";

const Root = styled(motion.g)``;

const Fluoro = styled(motion.line)``;

const INDENT = OVERHANG * 2.8;

type TProps = {
  scale: MotionValue<number>;
};
export const Lights: FC<TProps> = ({ scale }) => (
  <Root style={{ scale }}>
    <Fluoro
      x1={INDENT}
      x2={INDENT}
      y1={INDENT}
      y2={HEIGHT_AND_OVERHANG - INDENT}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={INDENT}
      x2={WIDTH_AND_OVERHANG - INDENT}
      y1={INDENT}
      y2={INDENT}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={WIDTH_AND_OVERHANG - INDENT}
      x2={WIDTH_AND_OVERHANG - INDENT}
      y1={INDENT}
      y2={HEIGHT_AND_OVERHANG - INDENT}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={INDENT}
      x2={WIDTH_AND_OVERHANG - INDENT}
      y1={HEIGHT_AND_OVERHANG - INDENT}
      y2={HEIGHT_AND_OVERHANG - INDENT}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
  </Root>
);
