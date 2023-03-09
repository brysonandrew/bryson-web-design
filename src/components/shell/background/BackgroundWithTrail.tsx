import { TrailGlow } from "@components/effects/glow/TrailGlow";
import styled from "@emotion/styled";
import type { TMotionValuePair } from "@state/types";
import COLORS from "@windi/config-colors.json";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Pattern } from "./pattern/Pattern";
import { PATTERN_ID } from "./pattern/config";

const ID = "TrailGlowId";

const Root = styled(motion.svg)``;

type TProps = { motionValuePairs: TMotionValuePair[] };
export const BackgroundWithTrail: FC<TProps> = ({
  motionValuePairs,
}) => (
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
          if (index === 0) {
            // return null;
            return (
              <motion.circle
                key={`${index}`}
                id={`${index}`}
                cx={x2}
                cy={y2}
                r="6"
                fill={COLORS["teal"]}
              />
            );
          }
          const [x1, y1] = arr[index - 1];
          return (
            <motion.line
              key={`${index}`}
              id={`${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={COLORS["teal"]}
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
        fill={`url(#${PATTERN_ID})`}
        filter={`url(#${ID})`}
      />
    </Root>
  </>
);
