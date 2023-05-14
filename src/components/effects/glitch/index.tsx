import { useState } from "react";
import type { FC } from "react";
import { useInterval } from "@hooks/useInterval";
import { Displacement } from "../displacement";
import {
  GLITCH_FRAGMENTS_ID,
  GLITCH_SWEEPS_ID,
  resolveRandomFragments,
  resolveRandomGlitch,
} from "./config";
import { Shapes as SweepShapes } from "../sweep/Shapes";
import { Filters as SweepFilters } from "../sweep/Filters";
import { Filters as FragmentFilters } from "../fragment/Filters";
import { Shapes as FragmentShapes } from "../fragment/Shapes";

import { SWEEPS_RESULT } from "../sweep/config";
import { FRAGMENTS_RESULT } from "../fragment/config";
import type { TFragmentShape } from "../fragment/Shape";
import type { TFilterChildrenProps } from "../types";

export const ID = "GlitchId";
type TProps = TFilterChildrenProps;
export const Glitch: FC<TProps> = () => {
  const glitch = resolveRandomGlitch();
  const [currGlitch, setGlitch] = useState(glitch);
  const [currFragments, setFragments] = useState<
    TFragmentShape[]
  >([]);

  const s = currGlitch.duration + currGlitch.delay;
  const ms = s * 1000;

  useInterval(() => {
    const glitch = resolveRandomGlitch();
    setGlitch(glitch);
  }, ms);

  useInterval(() => {
    const fragments = resolveRandomFragments();
    setFragments(fragments);
  }, currGlitch.delay * 100);

  const baseFrequency = currGlitch.duration * 0.1;

  return (
    <>
      <SweepShapes items={currGlitch.sweeps} />
      <FragmentShapes
        items={currFragments}
        s={currGlitch.delay}
      />
      <Displacement
        id={ID}
        baseFrequency={`0 ${baseFrequency}`}
        // animate={{ numOctaves: currGlitch.keyframes }}
        scale={200}
        // transition={{
        //   repeat: Infinity,
        //   repeatDelay: currGlitch.delay,
        //   duration: currGlitch.duration,
        // }}
      >
        {(noiseId) => (
          <>
            <SweepFilters
              id={noiseId}
              result="SweepFilters"
            />
            <feComposite
              in={noiseId}
              in2={SWEEPS_RESULT}
              operator="arithmetic"
              k1="0"
              k2="0.4"
              k3="0.4"
              k4="0"
              result={GLITCH_SWEEPS_ID}
            />
            <FragmentFilters />
            <feComposite
              in={noiseId}
              in2={FRAGMENTS_RESULT}
              operator="arithmetic"
              k1="0"
              k2="0.4"
              k3="0.4"
              k4="0"
              result={GLITCH_FRAGMENTS_ID}
            />
            <feComposite
              in={GLITCH_SWEEPS_ID}
              in2={GLITCH_FRAGMENTS_ID}
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
              result="glitch"
            />
          </>
        )}
      </Displacement>
    </>
  );
};
