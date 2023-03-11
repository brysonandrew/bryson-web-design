import styled from "@emotion/styled";
import { resolveUrlId } from "@utils/resolveUrlId";
import { motion } from "framer-motion";
import type { FC } from "react";
import { PATTERN_ID, Pattern } from "./pattern";
import { Neon, NEON_ID } from "./neon";

const Root = styled(motion.svg)``;
const Rect = styled(motion.rect)``;

export const Background: FC = () => (
  <>
    <Root
      className="fixed inset-0 z-0"
      width="100%"
      height="100%"
    >
      <defs>
        <Pattern /> 
        <Neon/>
      </defs>
      <Rect 
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={resolveUrlId(PATTERN_ID)}
        filter={resolveUrlId(NEON_ID)}
      />
    </Root>
  </>
);
