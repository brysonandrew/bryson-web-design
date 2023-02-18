import { FC } from "react";
import { MotionValue, motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  OVERHANG,
  HEIGHT_AND_OVERHANG,
  WIDTH_AND_OVERHANG,
} from "@components/effects/glitch/config";
import COLORS from "../../../../../tailwind.config-colors.json";

const Root = styled(motion.g)``;

const Fluoro = styled(motion.line)``;

type TProps = {
  scale: MotionValue<number>;
};
export const Lights: FC<TProps> = ({ scale }) => {
  return (
    <Root style={{ scale }}>
      <Fluoro
        x1={OVERHANG}
        x2={OVERHANG}
        y1={OVERHANG}
        y2={HEIGHT_AND_OVERHANG}
        strokeWidth="4"
        stroke={COLORS["teal-bright"]}
      />
      <Fluoro
        x1={OVERHANG}
        x2={WIDTH_AND_OVERHANG}
        y1={OVERHANG}
        y2={OVERHANG}
        strokeWidth="4"
        stroke={COLORS["teal-bright"]}
      />
      <Fluoro
        x1={WIDTH_AND_OVERHANG}
        x2={WIDTH_AND_OVERHANG}
        y1={OVERHANG}
        y2={HEIGHT_AND_OVERHANG}
        strokeWidth="4"
        stroke={COLORS["teal-bright"]}
      />
      <Fluoro
        x1={OVERHANG}
        x2={WIDTH_AND_OVERHANG}
        y1={HEIGHT_AND_OVERHANG}
        y2={HEIGHT_AND_OVERHANG}
        strokeWidth="4"
        stroke={COLORS["teal-bright"]}
      />
    </Root>
  );
};
