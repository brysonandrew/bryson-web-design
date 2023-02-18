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

type TProps = {
  scale: MotionValue<number>;
};
export const Lights: FC<TProps> = ({ scale }) => (
  <Root style={{ scale }}>
    <Fluoro
      x1={OVERHANG}
      x2={OVERHANG}
      y1={OVERHANG}
      y2={HEIGHT_AND_OVERHANG}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={OVERHANG}
      x2={WIDTH_AND_OVERHANG}
      y1={OVERHANG}
      y2={OVERHANG}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={WIDTH_AND_OVERHANG}
      x2={WIDTH_AND_OVERHANG}
      y1={OVERHANG}
      y2={HEIGHT_AND_OVERHANG}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
    <Fluoro
      x1={OVERHANG}
      x2={WIDTH_AND_OVERHANG}
      y1={HEIGHT_AND_OVERHANG}
      y2={HEIGHT_AND_OVERHANG}
      strokeWidth="4"
      stroke={COLORS["teal-04"]}
      filter={`url(#${GLOW_ID})`}
    />
  </Root>
);
