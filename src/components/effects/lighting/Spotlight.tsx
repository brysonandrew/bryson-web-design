import type { FC } from "react";
import { motion } from "framer-motion";
import type { TChildren } from "@t/index";
import { SPOTLIGHT_ID } from "./config";
import type { TXY } from "@t/position";
import { useContext } from "@state/Context";
import { TMotionValuePair } from "@state/types";

type TProps = TXY & {
  children?: TChildren;
};
export const Spotlight: FC<TProps> = (props) => {
  const { motionValuePairs } = useContext();
  if (!motionValuePairs) return null;
  return (
    <filter id={SPOTLIGHT_ID}>
      {motionValuePairs.map(
        ([x, y]: TMotionValuePair, index: number) => (
          <motion.feSpecularLighting
            key={`${index}`}
            specularConstant="0.4"
            specularExponent="80"
            lighting-color="#FFF"
          >
            <motion.fePointLight
              x={x}
              y={y}
              z="220"
              result={`${index}`}
            />
          </motion.feSpecularLighting>
        ),
      )}
      <feMerge>
        {motionValuePairs.map((_, index) => (
          <feMergeNode key={`${index}`} in={`${index}`} />
        ))}
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );
};
