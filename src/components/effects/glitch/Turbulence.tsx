import type { FC } from "react";
import { motion } from "framer-motion";

type TProps = {
  baseFrequency: number;
  keyframes: number[];
  delay: number;
  duration: number;
};
export const Turbulence: FC<TProps> = ({
  baseFrequency,
  keyframes,
  delay,
  duration,
}) => (
    <>
      <>
        <motion.feTurbulence
          type="turbulence"
          in="SourceGraphic"
          baseFrequency={`0 ${baseFrequency}`}
          animate={{ numOctaves: keyframes }}
          transition={{
            type: "keyframes",
            repeat: Infinity,
            repeatDelay: delay,
            duration,
          }}
          result="turbulence"
        />
        <motion.feMorphology
          in="turbulence"
          operator="erode"
          radius="0.1"
          result="thinned"
        />
        <feOffset
          in="SourceGraphic"
          dx="10"
          dy="10"
          result="offset"
        />
        <motion.feDisplacementMap
          in2="thinned"
          in="offset"
          scale="10"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacement"
        />
      </>
    </>
  );
