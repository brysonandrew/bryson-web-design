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
  // const xy = motionValuePairs[0];
  // if (!xy) return null;
  // const [x, y] = xy;
  const { x, y } = props;

  return (
    <filter id={SPOTLIGHT_ID}>
      <motion.feSpecularLighting
        result="spotlight"
        specularConstant="0.4"
        specularExponent="80"
        lighting-color="#FFF"
      >
        <motion.fePointLight
          // key={`${index}`}
          x={x}
          y={y}
          // pointsAtX={"500"}
          // pointsAtY={"350"}
          z="220"
          // limitingConeAngle="40"
        />
        {/* {motionValuePairs.map(
          ([x, y]: TMotionValuePair, index: number) => (
            <motion.fePointLight
              key={`${index}`} 
              x={x}
              y={y}
              // pointsAtX={"500"}
              // pointsAtY={"350"}
              z="220"
              // limitingConeAngle="40"
            />
          ),
        )} */}
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
};
