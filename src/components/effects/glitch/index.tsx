import { useState } from "react";
import type { FC } from "react";
import { useInterval } from "@hooks/useInterval";
import { Noise } from "./noise";
import {
  resolveRandomFragments,
  resolveRandomGlitch,
} from "./config";
import { GLITCH_FILTER_ID } from "./config";
import { Shapes as SweepShapes } from "./sweep/Shapes";
import { Filters as SweepFilters } from "./sweep/Filters";
import { Filters as FragmentFilters } from "./fragment/Filters";
import { Shapes as FragmentShapes } from "./fragment/Shapes";

import { SWEEPS_RESULT } from "./sweep/config";
import { FRAGMENTS_RESULT } from "./fragment/config";
import { TFragmentShape } from "./fragment/Shape";

export const Glitch: FC = () => {
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
      <filter id={GLITCH_FILTER_ID}>
        <Noise
          baseFrequency={baseFrequency}
          repeatDelay={currGlitch.delay}
          duration={currGlitch.duration}
          keyframes={currGlitch.keyframes}
        >
          {(noiseId) => (
            <>
              {/* <SweepFilters />
              <feComposite
                in={noiseId}
                in2={SWEEPS_RESULT}
                operator="arithmetic"
                k1="0"
                k2="0.4"
                k3="0.4"
                k4="0"
                result="glitch-sweeps"
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
                result="glitch-fragments"
              /> */}
            </>
          )}
        </Noise>
        {/* <feComposite
          in="glitch-sweeps"
          in2="glitch-fragments"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="glitch"
        /> */}
      </filter>
    </>
  );
};
