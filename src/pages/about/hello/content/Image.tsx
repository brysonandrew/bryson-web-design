import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  WIDTH,
  HEIGHT,
  OVERHANG,
  IMAGE_WIDTH,
  GLITCH_GREEN_ID,
} from "@components/effects/glitch/_cemetary/config";

const Root = styled(motion.image)``;

type TProps = {
  scale: MotionValue<number>;
};
export const Image: FC<TProps> = ({ scale }) => (
  <Root
    x={WIDTH - IMAGE_WIDTH - OVERHANG * 0.5}
    y={OVERHANG * 0.5}
    width={IMAGE_WIDTH - OVERHANG}
    height={HEIGHT - OVERHANG}
    preserveAspectRatio="xMidYMid slice"
    xlinkHref="/mugshot2.png"
    filter={`url(#${GLITCH_GREEN_ID})`}
    style={{
      scale,
    }}
  />
);
