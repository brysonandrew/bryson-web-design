import type { FC } from "react";
import { MotionValue, motion } from "framer-motion";
import type { TChildren } from "@t/index";
import { SPOTLIGHT_ID } from "./config";
type TProps = {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  children?: TChildren;
};
export const Spotlight: FC<TProps> = ({
  cursorX,
  cursorY,
}) => (
  <filter id={SPOTLIGHT_ID}>
    <motion.feSpecularLighting
      result="spotlight"
      specularConstant="0.4"
      specularExponent="80"
      lighting-color="#FFF"
    >
      <motion.fePointLight
        x={cursorX}
        y={cursorY}
        // pointsAtX={"500"}
        // pointsAtY={"350"}
        z="220"
        // limitingConeAngle="40" 
      />
    </motion.feSpecularLighting>
    <motion.feComposite
      in="SourceGraphic"
      in2="spotlight"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0"
    />
  </filter>
);
