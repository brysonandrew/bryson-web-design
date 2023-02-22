import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInterval } from "@hooks/useInterval";
import {
  GLITCH_ID,
  GLITCH_WITH_LINE_ID,
  resolveRandomGlitch,
} from "./config";

export const FilterWithLine: FC<any> = () => {
  const glitch = resolveRandomGlitch();
  const [currGlitch, setGlitch] = useState(glitch);

  useInterval(() => {
    const glitch = resolveRandomGlitch();
    setGlitch(glitch);
  }, (currGlitch.duration + currGlitch.delay) * 1000);

  const baseFrequency = currGlitch.duration * 0.1;

  return (
    <>
      <pattern
        id="z"
        width="1107.5"
        height="425"
        patternUnits="userSpaceOnUse"
      >
        <line
          id="x"
          fill="green"
          stroke="purple"
          x1={0}
          y1={80}
          x2={90}
          y2={20}
        />
        <rect
          id="y"
          fill="red"
          stroke="purple"
          x={0}
          y={80}
          width={90}
          height={10}
        />
      </pattern>

      <filter id={GLITCH_WITH_LINE_ID}>
        <motion.feTurbulence
          type="turbulence"
          in="SourceGraphic"
          baseFrequency={`0 ${baseFrequency}`}
          animate={{ numOctaves: currGlitch.keyframes }}
          transition={{
            type: "keyframes",
            repeat: Infinity,
            repeatDelay: currGlitch.delay,
            duration: currGlitch.duration,
          }}
          result="turbulence"
        />
        <motion.feMorphology
          in="turbulence"
          operator="erode"
          radius="0.1"
          result="fatty"
        />
        <feOffset
          in="SourceGraphic"
          dx="10"
          dy="10"
          result="offset"
        />
        <motion.feDisplacementMap
          in2="fatty"
          in="offset"
          scale="10"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacement"
        />
        <feImage result="line" xlinkHref="#x" />
        <feImage result="rect" xlinkHref="#y" />
        <feImage result="zzz" xlinkHref="#z" />

        {/* <feComposite in="SourceGraphic" in2="line" /> */}
        <feComposite
          in="SourceGraphic"
          in2="line"
          operator="in"
          result="X"
        />
             <feComposite
          in="SourceGraphic"
          in2="rect"
          operator="in"
          result="Y"
        />
        <feComposite
          in="SourceGraphic"
          in2="zzz"
          operator="in"
          result="X"
        />
        <feMerge>
          <feMergeNode in="displacement" />
          {/* <feMergeNode in="SourceGraphic" /> */}
          {/* <feMergeNode in="#y" />
          <feMergeNode in="#x" /> */}
          <feMergeNode in="rect" />
          <feMergeNode in="X" />
          <feMergeNode in="Y" />
          <feMergeNode in="Z" />
        </feMerge>
      </filter>
    </>
  );
};
