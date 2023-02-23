import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInterval } from "@hooks/useInterval";
import {
  GLITCH_GREEN_ID,
  resolveRandomGlitch,
} from "./config";
import COLORS from "@tailwind/config-colors.json";
const INTENSITY = 10;

export const Green: FC = () => {
  const glitch = resolveRandomGlitch();
  const [currGlitch, setGlitch] = useState(glitch);

  useInterval(() => {
    const glitch = resolveRandomGlitch();
    setGlitch(glitch);
  }, (currGlitch.duration + currGlitch.delay) * 1000);

  const baseFrequency = currGlitch.duration * 0.1;

  return (
    <filter id={GLITCH_GREEN_ID}>
      <motion.feTurbulence
        type="turbulence"
        in="SourceGraphic"
        baseFrequency={`0 ${baseFrequency}`}
        animate={{ numOctaves: currGlitch.keyframes }}
        transition={{
          repeat: Infinity,
          repeatDelay: currGlitch.delay,
          duration: currGlitch.duration,
        }}
        result="turbulence"
      />
      <feMorphology
        in="turbulence"
        operator="erode"
        radius="0.1"
        result="skinny"
      />
      <feOffset
        in="SourceGraphic"
        dx={INTENSITY}
        dy={INTENSITY}
        result="offset"
      />
      <feDisplacementMap
        in2="skinny"
        in="offset"
        scale={INTENSITY}
        xChannelSelector="R"
        yChannelSelector="G"
        result="displacement"
      />
      <motion.feFlood
        in="displacement"
        floodOpacity="0.9"
        result="displacement-opacity"
      />
      <feComposite
        in="displacement"
        in2="displacement-opacity"
        operator="in"
        result="glitch"
      />
      <feFlood
        in="offset"
        floodColor={COLORS["teal-bright"]}
        result="color"
      />
      {/* <feComposite
        in="color"
        in2="glitch"
        operator="in"
        result="green"
      /> */}
      <feOffset
        in="SourceGraphic"
        dx={INTENSITY + INTENSITY * 0.5}
        dy={INTENSITY + INTENSITY * 0.5}
        result="offset2"
      />
      <feFlood
        in="offset2"
        floodOpacity="0.4"
        result="opacity2"
      />
      <feComposite
        in="offset2"
        in2="opacity2"
        operator="in"
        result="original"
      />
      <feMerge>
        <feMergeNode in="green" />
        <feMergeNode in="glitch" />
        <feMergeNode in="original" />
      </feMerge>
    </filter>
  );
};
