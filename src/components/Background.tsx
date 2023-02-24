import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Pattern } from "./effects/glitch/_cemetary/Pattern";
import { PATTERN_ID } from "./effects/glitch/_cemetary/config";

const Root = styled(motion.svg)``;

export const Background: FC = () => (
  <>
    <Root
      className="fixed inset-0 z-0"
      width="100%"
      height="100%"
    >
      <defs>
        <Pattern />
      </defs>
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${PATTERN_ID})`}
      />
    </Root>
  </>
);
