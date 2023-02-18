import { FC } from "react";
import { MotionValue, motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  WIDTH,
  HEIGHT,
  OVERHANG,
  GLITCH_ID,
  IMAGE_WIDTH,
} from "@components/effects/glitch/config";
const Root = styled(motion.image)``;

type TProps = {
  scale: MotionValue<number>;
};
export const Image: FC<TProps> = ({ scale }) => {
  return (
    <Root
      x={WIDTH - IMAGE_WIDTH - OVERHANG * 0.5}
      y={OVERHANG * 0.5}
      width={IMAGE_WIDTH - OVERHANG}
      height={HEIGHT - OVERHANG}
      preserveAspectRatio="xMidYMid slice"
      xlinkHref="/mugshot2.png"
      filter={`url(#${GLITCH_ID})`}
      style={{ scale }}
    />
  );
};
