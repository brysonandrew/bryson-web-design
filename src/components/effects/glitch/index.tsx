import { useState } from "react";
import type { FC } from "react";
import { useInterval } from "@hooks/useInterval";
import { Turbulence } from "./Turbulence";
import { resolveRandomGlitch } from "../glow/config";
import { GLITCH_FILTER_ID } from "./config";
import { Shapes as SweepShapes } from "./sweep/Shapes";
import { Filters as SweepFilters } from "./sweep/Filters";
import { Filters as FragmentFilters } from "./fragment/Filters";
import { Shapes as FragmentShapes } from "./fragment/Shapes";

import { SWEEPS_RESULT } from "./sweep/config";
import { FRAGMENTS_RESULT } from "./fragment/config";

export const Glitch: FC = () => {
  const glitch = resolveRandomGlitch();
  const [currGlitch, setGlitch] = useState(glitch);

  useInterval(() => {
    const glitch = resolveRandomGlitch();
    setGlitch(glitch);
  }, (currGlitch.duration + currGlitch.delay) * 1000);

  const baseFrequency = currGlitch.duration * 0.1;

  return (
    <>
      <SweepShapes duration={currGlitch.duration} />
      <FragmentShapes duration={currGlitch.duration} />

      <filter id={GLITCH_FILTER_ID}>
        <Turbulence
          baseFrequency={baseFrequency}
          delay={currGlitch.delay}
          duration={currGlitch.duration}
          keyframes={currGlitch.keyframes}
        />
        <SweepFilters />
        <feComposite
          in="displacement"
          in2={SWEEPS_RESULT}
          operator="lighter"
          result="glitch-sweeps"
        />
        <FragmentFilters />
        <feComposite
          in="displacement"
          in2={FRAGMENTS_RESULT}
          operator="lighter"
          result="glitch-fragments"
        />

        <feComposite
          in="glitch-sweeps"
          in2="glitch-fragments"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="glitch"
        />
        {/* <feMerge result="glitch">
          <feMergeNode in="glitch-fragments" />
          <feMergeNode in="glitch-sweeps" />
        </feMerge> */}
      </filter>
    </>
  );
};
