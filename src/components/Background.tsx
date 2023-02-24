import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Pattern } from "./effects/glitch/_cemetary/Pattern";
import { PATTERN_ID } from "./effects/glitch/_cemetary/config";
import { TrailGlow } from "./effects/glow/TrailGlow";
import { SPOTLIGHT_ID } from "./effects/lighting/config";
import { TRAIL_SIZE } from "./cursor";
import { useContext } from "@state/Context";

const ID = "TrailGlowId";
const GRADIENT_ID = "GradientTrailGlowId";

const Root = styled(motion.svg)``;

export const Background: FC = () => {
  const { motionValuePairs } = useContext();
  if (!motionValuePairs) return null;

  return (
    <>
      <Root className="fixed" width="100%" height="100%">
        <defs>
          <Pattern />
          <TrailGlow id={ID} />
          <radialGradient id={GRADIENT_ID}>
            <stop offset="5%" stopColor="red" />
            <stop offset="50%" stopColor="red" />
            <stop offset="95%" stopColor="transparent" />

          </radialGradient>
        </defs>
        <>
          {motionValuePairs.map(
            ([x, y], index, { length }) => (
              <motion.circle
                key={`${index}`}
                id={`${index}`}
                cx={x}
                cy={y}
                fill={`url(#${GRADIENT_ID})`}
                opacity={1 - index / length}
                r={20}
              />
            ),
          )}
        </>
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${GRADIENT_ID})`}
          filter={`url(#${PATTERN_ID})`}
        />
      </Root>
    </>
  );
};
