import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { useResetScroll } from "../hooks/useResetScroll";
import type { TChildren } from "../types";
import { Pattern } from "./effects/glitch/Pattern";
import {
  PATTERN_ID,
  GLITCH_ID,
} from "./effects/glitch/config";
import { GLOW_ID } from "./effects/glow/config";
import { LIGHTING_ID } from "./effects/lighting/config";

const Root = styled(motion.div)``;
const Svg = styled(motion.svg)``;

type TProps = { children: TChildren };
export const Shell: FC<TProps> = ({ children }) => {
  useResetScroll();
  return (
    <Root
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <Svg
        className="fixed inset-0"
        width="100%"
        height="100%"
      >
        <Pattern />
        <motion.rect
          x={0}
          y={0}
          width="100%"
          height="100%"
          fill={`url(#${PATTERN_ID})`}
          
          style={{ scale: 1 }}
        />
      </Svg>
      {children}
    </Root>
  );
};
