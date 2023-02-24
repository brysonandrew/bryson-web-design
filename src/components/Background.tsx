import styled from "@emotion/styled";
import { TMotionValuePair } from "@state/types";
import COLORS from "@windi/config-colors.json";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Pattern } from "./effects/glitch/_cemetary/Pattern";
import { PATTERN_ID } from "./effects/glitch/_cemetary/config";
import { TrailGlow } from "./effects/glow/TrailGlow";

const ID = "TrailGlowId";
const GRADIENT_ID = "GradientTrailGlowId";

const Root = styled(motion.svg)``;

type TProps = { motionValuePairs: TMotionValuePair[] };
export const Background: FC<TProps> = ({
  motionValuePairs,
}) => {
  return (
    <>
      <Root
        className="fixed inset-0"
        width="100%"
        height="100%"
      >
        <defs>
          <Pattern />
          <TrailGlow
            id={ID}
            motionValuePairs={motionValuePairs}
          />
        </defs>
        <>
          {motionValuePairs.map(([x2, y2], index, arr) => {
            if (index === 0) return null;
            const [x1, y1] = arr[index - 1];
            return (
              <motion.line
                key={`${index}`}
                id={`${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={COLORS["teal-04"]}
                strokeWidth={10}
              />
            );
          })}
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
